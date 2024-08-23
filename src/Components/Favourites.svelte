<script>
	import { onMount } from 'svelte';
	import { getMealById } from '../utils/api';
	import MealCard from './MealCard.svelte';
	let meals = [];

	const favouriteMealIds = ['52772', '52768', '52767'];

	function fetchFavouriteMeals() {
		Promise.all(favouriteMealIds.map((id) => getMealById(id)))
			.then((mealsArray) => {
				meals = mealsArray.map((mealData) => mealData[0]);
			})
			.catch((error) => {
				console.error('Error fetching meals:', error);
			});
	}

	onMount(() => {
		fetchFavouriteMeals();
	});
</script>

{#if meals.length > 0}
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each meals as meal}
			<MealCard idMeal={meal.idMeal} strMeal={meal.strMeal} strMealThumb={meal.strMealThumb} />
		{/each}
	</div>
{:else}
	<p>Loading favorite meals...</p>
{/if}