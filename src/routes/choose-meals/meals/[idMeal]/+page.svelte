<script context="module">
	import MealCard from '../../../../Components/MealCard.svelte';
	import Navbar from '../../../../Components/Navbar.svelte';
	import { getMealById } from '../../../../utils/api';

	export function load({ params }) {
		const { idMeal } = params;

		return getMealById(idMeal)
			.then((data) => {
				return { meal: data[0], error: null };
			})
			.catch((err) => {
				console.error('Error fetching meal details:', err);
				return { meal: null, error: 'Failed to load meal details' };
			});

		return { meal, error };
	}
</script>

<script>
	export let meal = null;
	export let error = null;
</script>

<Navbar />
{#if error}
	<p class="text-red-500">{error}</p>
{:else if meal}
	<MealCard idMeal={meal.idMeal} strMeal={meal.strMeal} strMealThumb={meal.strMealThumb} />
{:else}
	<p>Loading meal details</p>
{/if}
