<script>
	import { onMount } from 'svelte';
	import { getMealById } from '../utils/api';
	import MealCard from './MealCard.svelte';

	let meals = [];

	const favouriteMealIds = ['52772', '52768', '52767', '53000', '53010', '53020', '53030'];

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
	<div class="hide-scroll-bar flex overflow-x-scroll pb-4">
		<div class="flex flex-nowrap">
			{#each meals as meal}
				<div class="flex min-w-40 flex-row flex-wrap px-1">
					<MealCard idMeal={meal.idMeal} strMeal={meal.strMeal} strMealThumb={meal.strMealThumb} />
				</div>
			{/each}
		</div>
	</div>
{:else}
	<p>Loading favorite meals...</p>
{/if}
