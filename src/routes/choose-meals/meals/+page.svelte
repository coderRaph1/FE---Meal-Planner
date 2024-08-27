<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { getMealsByName, getMealsByCategory } from '../../../utils/api';
	import MealCard from '../../../Components/MealCard.svelte';
	import Navbar from '../../../Components/Navbar.svelte';
	import Favourites from '../../../Components/Favourites.svelte';

	let searchQuery = '';
	let categoryQuery = '';
	let meals = [];
	let error = null;

	$: {
		const urlParams = new URLSearchParams($page.url.search);
		searchQuery = urlParams.get('search') || '';
		categoryQuery = urlParams.get('category') || '';

		if (searchQuery) {
			getMealsByName(searchQuery)
				.then((fetchedMeals) => {
					meals = fetchedMeals || [];
					error = null;
				})
				.catch((err) => {
					console.error('Error fetching meals:', err);
					error = 'Failed to load meals';
				});
		} else if (categoryQuery) {
			getMealsByCategory(categoryQuery)
				.then((fetchedMeals) => {
					meals = fetchedMeals || [];
					error = null;
				})
				.catch((err) => {
					console.error('Error fetching meals:', err);
					error = 'Failed to load meals';
				});
		}
	}
</script>

<Navbar />
<main class="flex flex-col">

	<h2 class="my-2 text-2xl font-semibold text-center">
		{#if searchQuery && meals.length > 0}
		Search Results for "{searchQuery}"
		{:else if categoryQuery && meals.length > 0}
		Meals in Category "{categoryQuery}"
		{/if}
	</h2>
	
	{#if error}
	<p class="text-red-500">{error}</p>
	{:else if meals.length > 0}
	<main class="w-dvw h-dvh grid grid-cols-2 gap-2 p-2">
		{#each meals as meal}
		<MealCard idMeal={meal.idMeal} strMeal={meal.strMeal} strMealThumb={meal.strMealThumb} />
		{/each}
		<div class="w-full h-1"></div>
	</main>
	{:else if meals.length === 0}
	<h2 class="my-2 text-2xl font-semibold text-center">Uh oh... we couldn't find anything.</h2>
	<h3 class="my-2 text-lg font-medium text-center">Why don't you try some of these instead?</h3>
	<Favourites />
	<button class="p-0 py-3 px-6 mt-4 mx-auto text-center " on:click={() => {
		searchQuery = ""
		goto("/choose-meals")
	}}>Back</button>
{:else if searchQuery || categoryQuery}
<p>Loading meals...</p>
{:else}
<p>No meals found.</p>
{/if}
</main>
