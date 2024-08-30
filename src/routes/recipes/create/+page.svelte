<script>
	import { postRecipe } from '../../../api.js';
	import { userDetails } from '../../../stores.js';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import {browser} from "$app/environment"

	let cook_time = 10;
	let prep_time = 15;
	let recipe_name = '';
	let ingredient = '';
	let instruction = '';
	$: ingredients = [];
	$: instructions = [];
	$: submitted = false;
	let user_id = ""
    if (browser) {
        user_id = localStorage.getItem("user")
    }

	onMount(() => {
	  console.log("hello", user_id)
	})
	const handleSubmit = (e) => {
		e.preventDefault();
		submitted = true;
		if (ingredients.length === 0 || instructions.length === 0) {
			if (ingredient) {
				ingredients = [ingredient]
				ingredient = ''
			}
			if (instruction) {
				instructions = [instruction]
				instruction = ''
			}
		}
		if (ingredients.length > 0 && instructions.length > 0) {
			const body = {
				cook_time,
				prep_time,
				recipe_name,
				ingredients: ingredients.join(' \n '),
				instructions: instructions.join(' \n ')
			};
			return postRecipe(user_id, body).then(() => {
				goto('/recipes');
			});
		}
	};
	const addIngredient = () => {
		if (ingredient) {
			ingredients = [...ingredients, ingredient];
			ingredient = '';
		}
	};
	const addInstruction = () => {
		if (instruction) {
			instructions = [...instructions, instruction];
			instruction = '';
		}
	};
</script>

<main class="flex h-dvh w-dvw flex-col items-center" >
	<h1 class="pt-4 text-center">Create a new recipe</h1>
	<form class="flex w-1/2 flex-col items-center gap-2" on:submit={handleSubmit}>
		<label class="flex w-full justify-between" for="recipe-name"
			>Recipe Name
			<input
				class="ml-2 grow px-2"
				id="recipe-name"
				bind:value={recipe_name}
				placeholder="Scrambled eggs"
				required
			/>
		</label>
		{#each ingredients as ingredient}
			<p>{ingredient}</p>
		{/each}
		<label class="flex w-full items-center justify-between" for="ingredients"
			>Ingredients
			<div class="flex grow">
				<input
					class="mx-2 grow px-2"
					id="ingredients"
					bind:value={ingredient}
					on:keydown={(e) => {
						if (e.key === 'Enter') {
							e.preventDefault();
							addIngredient();
						}
					}}
					placeholder="Add your ingredients"
				/>
				<button class="px-2 py-0 text-xs" type="button" on:click={addIngredient}>Add</button>
			</div>
		</label>
		{#if ingredients.length === 0 && submitted}
			<p class="text-xs text-red-500"><em> No ingredients!</em></p>
		{/if}
		{#each instructions as instruction}
			<p>{instruction}</p>
		{/each}
		<label class="flex w-full justify-between" for="instruction"
			>Instructions
			<div class="flex grow">
				<input
					class="mx-2 grow px-2"
					id="instructions"
					bind:value={instruction}
					on:keydown={(e) => {
						if (e.key === 'Enter') {
							e.preventDefault();
							addInstruction();
						}
					}}
					placeholder="Add your instructions"
				/>
				<button class="px-2 py-0 text-xs" type="button" on:click={addInstruction}>Add</button>
			</div>
		</label>
		{#if instructions.length === 0 && submitted}
			<p class="text-xs text-red-500"><em>No ingredients!</em></p>
		{/if}
		<label class="flex w-full justify-between" for="cook-time">
			Cook Time
			<div class="flex">
				<input
					class="mx-2 text-center"
					id="cook-time"
					type="number"
					bind:value={cook_time}
					min="0"
					max="120"
				/>
				<input id="cook-time" type="range" bind:value={cook_time} min="0" max="120" />
			</div>
		</label>
		<label class="flex w-full justify-between" for="prep-time">
			Preparation Time
			<div class="flex">
				<input
					class="mx-2 text-center"
					id="prep-time"
					type="number"
					bind:value={prep_time}
					min="0"
					max="120"
				/>
				<input id="prep-time" type="range" bind:value={prep_time} min="0" max="120" />
			</div>
		</label>
		<button class="py-1" type="submit">Submit</button>
	</form>
</main>
