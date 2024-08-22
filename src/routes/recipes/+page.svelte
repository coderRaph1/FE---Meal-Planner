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

<main class="flex h-dvh w-dvw flex-col">
	<h1 class="pt-4 text-center">My Recipes</h1>
	<button class="mb-2 w-fit self-center" on:click={() => goto('/recipes/create')}
		>Write a new recipe</button
	>
	<div class="flex gap-2 self-center">
		{#each userRecipes as recipe}
			<section class="p-2 outline outline-1" on:click={() => goto(`/recipes/${recipe.recipe_id}`)}>
				<p><strong>{recipe.recipe_name}</strong></p>
				<p>{recipe.cook_time + recipe.prep_time} minutes</p>
			</section>
		{/each}
	</div>
</main>
