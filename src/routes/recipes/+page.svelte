<script>
	import { onMount } from 'svelte';
	import { getUserRecipes, postRecipe } from '../../api.js';
	import { userDetails } from '../../stores.js';
	import { goto } from '$app/navigation';

	$: userRecipes = [];

	onMount(() => {
		getUserRecipes($userDetails.user.user_id).then(({ recipes }) => {
			userRecipes = [...recipes];
		});
	});

	const handleClick = () => {
		goto('/recipes/create')
		
	};
</script>
<main class="h-dvh w-dvw flex flex-col">

	<h1 class="pt-4 text-center">My Recipes</h1>
	<button class="w-fit self-center mb-2" on:click={handleClick}>Write a new recipe</button>
	<div class="flex gap-2 self-center">
		{#each userRecipes as recipe}
		<section class="outline outline-1 p-2">
			<p><strong>{recipe.recipe_name}</strong></p>
			<p>{recipe.cook_time + recipe.prep_time} minutes</p>
		</section>
		{/each}
	</div>
</main>
