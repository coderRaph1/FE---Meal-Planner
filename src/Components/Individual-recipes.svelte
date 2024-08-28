<script>

  import { onMount } from "svelte";
  import { getMealById } from "../utils/api";
  import { page } from '$app/stores';
	import { getListsForUser, postItem } from "../api";
	import { userDetails, userLists } from "../stores";

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
      console.log($userDetails, 'user details');
      return getListsForUser($userDetails.user.user_id)
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

  function addToShoppingList(){

    loading = true

    selectedIngredients.map((itemName) => {
      console.log(selectedList, 'selected list')
      return postItem(selectedList, itemName, 1)
      .then(() => {
        loading = false
        confirmed = true
      })
    })
    
    console.log(selectedIngredients, 'items in the checked-box array')
  }

  let selectedList 
  $: console.log(selectedList)

  let loading = false
  let confirmed = false

</script>


<main class="h-dvh w-dvw">
	<a href="#">
		<img class="rounded-t-lg" src={mealData.strMealThumb} alt="final meal image" />
	</a>
    <h1>{mealData.strMeal}</h1>
    <div class="p-5">
      <a href="#">
       <h5 class="mb-2 text-2xl font-medium tracking-tight">Ingredients needed:</h5>
		</a>
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
      {#if loading}<p>Loading...</p> 
      {:else if confirmed} <p>Your Shopping List has been Updated</p> 
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