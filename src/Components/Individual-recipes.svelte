<script>

  import { onMount } from "svelte";
  import { getMealById } from "../utils/api";
  import { page } from '$app/stores';
	import { getListsForUser, postItem } from "../api";
	import { userDetails, userLists } from "../stores";
  import {browser} from "$app/environment"
  let user_id
  if (browser) user_id = localStorage.getItem("user")
  let currentPath = '/';
  let mealData = {};
  let selectedIngredients = [];
  $: instructions = []

  $: currentPath = $page.url.pathname.split('/').filter(Boolean).pop() || '/';
  
  let usersList = []

  onMount(() => {
    getMealById(currentPath).then((data) => {
      mealData = data[0];
      instructions = mealData.strInstructions.split(".")
      instructions = instructions.map((instruction) => {
        if (!instruction) return ""
        else if (instruction[instruction.length-1] === "!") return instruction
        else return instruction + "."
      })
      return getListsForUser(user_id)
    }).then((data) => {
      usersList = data.lists
      console.log(usersList, 'the different lists available');
      
    })
  });

  function getIngredients(meal) {
  return Object.keys(meal)
    .filter(key => key.startsWith('strIngredient') && meal[key])
    .map(key => {
      const ingredientNumber = key.replace('strIngredient', '')
      const measureKey = `strMeasure${ingredientNumber}`
      const measure = meal[measureKey] || ''
      return `${measure} ${meal[key]}`.trim()
    });
}
  function handleCheckboxChange(event, ingredient) {
    if (event.target.checked) {
      selectedIngredients.push(ingredient);
    } else {
      selectedIngredients = selectedIngredients.filter(item => item !== ingredient);
    }
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function addToShoppingList() {
    loading = true
    let promiseChain = Promise.resolve()

    selectedIngredients.forEach((itemName) => {
        promiseChain = promiseChain
            .then(() => postItem(selectedList, itemName, 1))
            .then(() => delay(1))
            .catch(error => {
                console.error(`Failed to add ${itemName} to the shopping list:`, error)
            })
    })

    promiseChain
        .then(() => {
            loading = false;
            confirmed = true;
        })
        .catch(error => {
            loading = false;
            console.error('Error adding items to the shopping list:', error);
        });

    console.log(selectedIngredients, 'items in the checked-box array');
}
  
  let selectedList 
  $: console.log(selectedList)

  let loading = false
  let confirmed = false

</script>


<main class="h-dvh w-dvw">
  <h1>{mealData.strMeal}</h1>
		<img class="rounded-t-lg" src={mealData.strMealThumb} alt="final meal image" />
    <div class="p-5">
       <h5 class="mb-2 text-2xl font-medium tracking-tight">Ingredients needed:</h5>
    <ul class="mb-3 grid grid-cols-2 gap-1 font-normal">
        {#each getIngredients(mealData) as ingredient}
          <li>
            <label class="flex items-center">
              <input type="checkbox" class="mr-2" on:change="{(event) => handleCheckboxChange(event, ingredient)}" />
              {ingredient}
            </label>
          </li>
        {/each}
      </ul>
      <form>
        <label for="list-name" style="font-size: 18px;">Choose a list to add items to:</label>
        <select id='list-name' bind:value={selectedList}>
         {#each usersList as listItem} <option value={listItem.list_id}>{listItem.list_name}</option>{/each}
        </select>
      </form>
      
    <div class="p-8">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-7 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full" on:click="{addToShoppingList}">
        Add Items to Shopping List
        <svg class="rtl:rotate-180 w-4 h-4 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </button>
      {#if loading}<ul class="max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400">
        <li class="flex items-center">
            <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                <span class="sr-only">Loading...</span>
            </div>
            Loading...
        </li>
    </ul> 
    {:else if confirmed} 
    <p class="confirmation-message">
        ✅ Your Shopping List has been <strong>successfully</strong> updated! ✅
    </p>
{/if}
    </div>
    <h5 class="mb-2 text-2xl font-medium tracking-tight">
			Instructions:
		</h5>
    {#each instructions as instruction }
		<p class="pb-2">{instruction}</p>

    {/each}
  </div>
</main>

