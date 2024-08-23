<script>
	import { postRecipe } from '../../../api.js';
	import { userDetails } from '../../../stores.js';
	import { goto } from '$app/navigation';
	let cook_time = 10
	let prep_time = 15
	let recipe_name = ""
	let ingredient = ""
	let instruction = ""
	$: ingredients = []
	$: instructions = []
	
		const handleSubmit = (e) => {
		  e.preventDefault()
			const body = {
				cook_time, prep_time, recipe_name, ingredients: ingredients.join(" \n "), instructions: instructions.join(" \n ")
			}
			return postRecipe($userDetails.user.user_id, body).then(() => {
				goto("/recipes")
			})
		}
		const addIngredient = () => {
		  ingredients = [...ingredients, ingredient]
		  ingredient = ""
		}
		const addInstruction = () => {
			if (instruction) {
				instructions = [...instructions, instruction]
				instruction = ""
			}
		}
</script>
<main class="h-dvh w-dvw flex flex-col items-center">

	<h1 class="pt-4 text-center">Create a new recipe</h1>
	<form class="flex flex-col items-center gap-2 w-1/2 " on:submit={handleSubmit}>
		<label class="w-full flex justify-between" for="recipe-name">Recipe Name 
			<input class="grow ml-2 px-2" id="recipe-name" bind:value={recipe_name} placeholder="Scrambled eggs" required/>
		</label>
		{#each ingredients as ingredient}
			<p>{ingredient}</p>
		{/each}
		<label class="w-full flex justify-between items-center" for="ingredients">Ingredients 
			<div class="flex grow">
				<input class="grow mx-2 px-2" id="ingredients" bind:value={ingredient} on:keydown={(e) => {
					if (e.key === "Enter") {
						e.preventDefault()
						addIngredient()
					}
				}} placeholder="Add your ingredients" red/>
				<button class="py-0 px-2 text-xs" type="button" on:click={addIngredient}>Add</button>
			</div>
		</label>
		{#each instructions as instruction}
			<p>{instruction}</p>
		{/each}
		<label class="w-full flex justify-between" for="instruction">Instructions 
			<div class="flex grow">
				<input class="grow mx-2 px-2" id="instructions" bind:value={instruction} on:keydown={(e) => {
					if (e.key === "Enter") {
						e.preventDefault()
						addInstruction()
					}
				}} placeholder="Add your instructions" required />
				<button class="py-0 px-2 text-xs" type="button" on:click={addInstruction}>Add</button>
			</div>
		</label>
		<label class="w-full flex justify-between" for="cook-time">
			Cook Time
			<div class="flex">
				<input class="mx-2 text-center" id="cook-time" type="number" bind:value={cook_time} min="0" max="120" />
				<input id="cook-time" type="range" bind:value={cook_time} min="0" max="120" />
			</div>
		</label>
		<label class="w-full flex justify-between" for="prep-time">
			Preparation Time
			<div class="flex">
				<input class="mx-2 text-center" id="prep-time" type="number" bind:value={prep_time} min="0" max="120" />
				<input id="prep-time" type="range" bind:value={prep_time} min="0" max="120" />
			</div>
		</label>
		<button class="py-1" type="submit">Submit</button>
	</form>
</main>
