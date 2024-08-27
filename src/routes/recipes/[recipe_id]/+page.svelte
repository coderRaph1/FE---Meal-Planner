<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { getRecipeById, patchRecipe } from '../../../api';
	import EditIcon from '../../../lib/assets/edit-icon.svelte';
	let currentPath = '/';
	$: currentPath = $page.url.pathname.split('/').filter(Boolean).pop() || '/';
	$: recipeInfo = {};
	$: ingredients = [];
	$: instructions = [];
	$: editRecipe = false;
	onMount(() => {
		getRecipeById(currentPath).then(({ recipe }) => {
			recipeInfo = recipe;
			const newLineRegex = new RegExp(/(?:\r\n|\r|\n)/g);
			ingredients = recipeInfo.ingredients.replace(newLineRegex, '-').split(' - ');
			instructions = recipeInfo.instructions.replace(newLineRegex, '-').split(' - ');
		});
	});
	const submitEdit = () => {
		if (ingredients[ingredients.length - 1] === "") {
			ingredients.pop()
		}
		if (instructions[instructions.length - 1] === "") {
			instructions.pop()
		}
		const {cook_time, prep_time, recipe_name} = recipeInfo
		const patchInfo = {
			cook_time, ingredients: ingredients.join(' \n '), instructions: instructions.join(' \n '), prep_time, recipe_name
		}
		return patchRecipe(recipeInfo.recipe_id, patchInfo)
		.then(() => {
		  editRecipe = false
		})
	};
	
	const handleAddIngredient = () => {
		if (ingredients[ingredients.length - 1] !== "") {
			ingredients = [...ingredients, '']
		}
	}
	const handleAddInstruction = () => {
		if (instructions[instructions.length - 1] !== "") {
			instructions = [...instructions, '']
		}
	}
</script>

<main class=" h-dvh w-dvw items-center p-6">
	{#if !editRecipe}
		<h1 class="mb-2 text-3xl">{recipeInfo.recipe_name}</h1>
		<p class="w-full text-center text-sm">{recipeInfo.prep_time} mins prep</p>
		<p class="mb-2 w-full text-center text-sm">{recipeInfo.cook_time} mins to cook</p>
		<h2 class="mb-2 mr-auto w-fit border-b border-black text-2xl">Ingredients</h2>
		<ul class=" mb-4 ml-6 w-full">
			{#each ingredients as ingredient}
				<li class="text-md list-disc">{ingredient}</li>
			{/each}
		</ul>
		<h2 class="mb-2 mr-auto w-fit border-b border-black text-2xl">Instructions</h2>
		<ol class=" ml-7 w-full">
			{#each instructions as instruction}
				<li class="text-md list-decimal">{instruction}</li>
			{/each}
		</ol>
		<button
			on:click={() => (editRecipe = !editRecipe)}
			class="hover:scale-100 absolute bottom-0 right-0 -translate-x-1/2 -translate-y-1/2 text-3xl"
		>
			<EditIcon class="ml-auto mt-auto text-3xl" />
		</button>
	{/if}
	{#if editRecipe}
		<form class=" mx-0 p-0 flex flex-col" on:submit={submitEdit}>
			<button class="outline w-fit px-4 py-1 self-center rounded-md mb-4 bg-gradient-to-tr from-teal-200 to-teal-100" type="submit">Done</button>
			<input class="text-3xl bg-inherit mb-2 outline-dashed bg-gradient-to-tr from-teal-200 to-teal-100" bind:value={recipeInfo.recipe_name} />
			<div class=" bg-gradient-to-tr from-teal-200 to-teal-100 flex my-2 outline-dashed">
				<input
					class="mx-2 text-center bg-inherit "
					id="prep-time"
					type="number"
					bind:value={recipeInfo.prep_time}
					min="0"
					max="120"
				/>
				<input id="prep-time" type="range" bind:value={recipeInfo.prep_time} min="0" max="120" />
				<label class="text-sm ml-2" for="prep-time"> mins prep</label>
			</div>
			<div class="flex my-2 outline-dashed bg-gradient-to-tr from-teal-200 to-teal-100">
				<input
					class="mx-2 text-center bg-inherit"
					id="cook-time"
					type="number"
					bind:value={recipeInfo.cook_time}
					min="0"
					max="120"
				/>
				<input id="cook-time" type="range" bind:value={recipeInfo.cook_time} min="0" max="120" />
				<label class="text-sm ml-2" for="cook-time"> mins to cook</label>
			</div>
			<fieldset class=" flex flex-col my-4">
				<legend class="mb-2 mr-auto w-fit border-b border-black text-2xl">Ingredients</legend>
				{#each ingredients as ingredient}
					<input class="px-2 my-2 text-md w-full list-disc bg-inherit outline-dashed bg-gradient-to-tr from-teal-200 to-teal-100" bind:value={ingredient} />
				{/each}
				<button class="outline w-fit px-4 py-1 self-center rounded-md mt-4 bg-gradient-to-tr from-teal-200 to-teal-100" type="button" on:click={handleAddIngredient}>Add ingredient</button>
			</fieldset>
			<fieldset class=" flex flex-col my-4">
				<legend class="mb-2 mr-auto w-fit border-b border-black text-2xl">Instructions</legend>
				{#each instructions as instruction}
					<input class="px-2 my-2 text-md w-full list-decimal bg-inherit outline-dashed bg-gradient-to-tr from-teal-200 to-teal-100" bind:value={instruction} />
					{/each}
					<button class="outline w-fit px-4 py-1 self-center rounded-md mt-4 bg-gradient-to-tr from-teal-200 to-teal-100" type="button" on:click={handleAddInstruction}>Add instruction</button>
				</fieldset>
			<button class="outline w-fit px-4 py-1 self-center rounded-md mb-4 bg-gradient-to-tr from-teal-200 to-teal-100" type="submit">Done</button>
		</form>
	{/if}
</main>
