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
</script>

<main class="flex h-dvh w-dvw px-2 flex-col items-center">
	<h1 class="pt-4 text-center">My Recipes</h1>
	<button class="mb-2 px-4 py-2 rounded-md outline w-fit self-center bg-gradient-to-tr from-teal-200 to-teal-100" on:click={() => goto('/recipes/create')}
		>Write a new recipe</button
	>
	<div class="flex gap-2 flex-wrap mx-2">
		{#each userRecipes as recipe}
			<button type="button" class="p-2 grow outline outline-1 bg-gradient-to-tr from-teal-200 to-teal-100 shadow-lg" on:click={() => goto(`/recipes/${recipe.recipe_id}`)}>	
					<p><strong>{recipe.recipe_name}</strong></p>
					<p>{recipe.cook_time + recipe.prep_time} minutes</p>
			</button>
		{/each}
	</div>
</main>
