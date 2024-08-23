<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { getRecipeById } from '../../../api';
	let currentPath = '/';
	$: currentPath = $page.url.pathname.split('/').filter(Boolean).pop() || '/';
	$: recipeInfo = {};
	$: ingredients = [];
	$: instructions = [];
	onMount(() => {
		getRecipeById(currentPath).then(({ recipe }) => {
			recipeInfo = recipe;
			const newLineRegex = new RegExp(/(?:\r\n|\r|\n)/g);
			ingredients = recipeInfo.ingredients.replace(newLineRegex, ' - ').split(' - ');
			instructions = recipeInfo.instructions.replace(newLineRegex, ' - ').split(' - ');
		});
	});
</script>

<main class="flex flex-col items-center w-dvw h-dvh p-6">
	<h1 class="text-3xl mb-2">{recipeInfo.recipe_name}</h1>
	<p class="text-sm w-full text-center">{recipeInfo.prep_time} mins prep</p>
	<p class="text-sm mb-2">{recipeInfo.cook_time} mins to cook</p>
	<h2 class="text-2xl mb-2 mr-auto border-b border-black">Ingredients</h2>
	<ul class=" w-full mb-4 ml-6">
		{#each ingredients as ingredient}
			<li class="list-disc text-md">{ingredient}</li>
		{/each}
	</ul>
	<h2 class="text-2xl mb-2 mr-auto border-b border-black">Instructions</h2>
	<ol class=" w-full ml-7">
		{#each instructions as instruction}
			<li class="list-decimal text-md">{instruction}</li>
		{/each}
	</ol>
</main>
