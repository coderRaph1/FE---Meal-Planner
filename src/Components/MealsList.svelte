<script>
	import { onMount } from 'svelte';
	import { getMealsByCategory } from '../utils/api';
	import MealCard from './MealCard.svelte';

	export let category = 'Chicken';

	let meals = [];
	let error = null;

	function fetchMeals() {
		getMealsByCategory(category).then((fetchedMeals) => {
			meals = fetchedMeals;
		});
	}
	onMount(() => {
		fetchMeals();
	});
	$: fetchMeals();
</script>

<h1>Meals in {category}</h1>
<div class="grid grid-cols-2 gap-4 md:grid-cols-3">
	{#if error}
		<p class="text-red-500">{error}</p>
	{:else if meals.length > 0}
		{#each meals as meal}
			<MealCard idMeal={meal.idMeal} strMeal={meal.strMeal} strMealThumb={meal.strMealThumb} />
		{/each}
	{:else}
		<p>Loading meals...</p>
	{/if}
</div>

