<script>
	import { onMount } from 'svelte';
	import { getMealById } from '../utils/api';
	import { page } from '$app/stores';
	import { getListsForUser, postItem } from '../api';
	import { userDetails, userLists } from '../stores';

	let currentPath = '/';
	let mealData = {};
	let selectedIngredients = [];

	$: currentPath = $page.url.pathname.split('/').filter(Boolean).pop() || '/';

	let usersList = [];

	onMount(() => {
		getMealById(currentPath)
			.then((data) => {
				mealData = data[0];
				console.log($userDetails, 'user details');
				return getListsForUser($userDetails.user.user_id);
			})
			.then((data) => {
				usersList = data.lists;
				console.log(usersList, 'the different lists available');
			});
	});

	function getIngredients(meal) {
		return Object.keys(meal)
			.filter((key) => key.startsWith('strIngredient') && meal[key])
			.map((key) => meal[key]);
	}

	function handleCheckboxChange(event, ingredient) {
		if (event.target.checked) {
			selectedIngredients.push(ingredient);
		} else {
			selectedIngredients = selectedIngredients.filter((item) => item !== ingredient);
		}
	}

	function addToShoppingList() {
		loading = true;
		console.log(selectedList);
		const promiseArr = selectedIngredients.map((itemName) => {
			return postItem(selectedList, itemName, 1);
		});

		console.log(selectedIngredients, 'items in the checked-box array');
		return Promise.all(promiseArr).then((data) => {
			console.log(data);
			loading = false;
			confirmed = true;
		});
	}

	let selectedList;
	$: console.log(selectedList);

	let loading = false;
	let confirmed = false;
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-100">
	<div
		class="w-full max-w-lg rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
	>
		<a href="#" class="w-full">
			<img
				class="h-1/3 w-full rounded-t-lg object-cover"
				src={mealData.strMealThumb}
				alt="Recipe Image"
			/>
		</a>
		<div class="flex-1 p-8">
			<a href="#">
				<h5 class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
					Ingredients needed:
				</h5>
			</a>
			<ul class="mb-8 text-lg font-normal text-gray-700 dark:text-gray-400">
				{#each getIngredients(mealData) as ingredient}
					<li>
						<label class="flex items-center">
							<input
								type="checkbox"
								class="mr-3"
								on:change={(event) => handleCheckboxChange(event, ingredient)}
							/>
							{ingredient}
						</label>
					</li>
				{/each}
			</ul>
			<form>
				<label for="list-name">Choose a list to add items to:</label>
				<select id="list-name" bind:value={selectedList}>
					{#each usersList as listItem}
						<option value={listItem.list_id}>{listItem.list_name}</option>{/each}
				</select>
			</form>
			<h5 class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
				Instructions:
			</h5>
			<p class="mb-8 text-lg font-normal text-gray-700 dark:text-gray-400">
				{mealData.strInstructions}
			</p>
		</div>
		<div class="p-8">
			<button
				type="button"
				class="inline-flex w-full items-center rounded-lg bg-blue-700 px-7 py-3 text-center text-lg font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				on:click={addToShoppingList}
			>
				Add Items to Shopping List
				<svg
					class="ms-3 h-4 w-4 rtl:rotate-180"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 10"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 5h12m0 0L9 1m4 4L9 9"
					/>
				</svg>
			</button>
			{#if loading}<p>Loading...</p>
			{:else if confirmed}
				<p>Your Shopping List has been Updated</p>
			{/if}
		</div>
	</div>
</div>
