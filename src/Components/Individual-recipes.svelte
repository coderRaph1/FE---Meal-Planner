<script>
	import { afterUpdate, onMount } from 'svelte';
	import { getMealById } from '../utils/api';
	import { page } from '$app/stores';

	let currentPath = '/';
	let mealData = {};

	$: currentPath = $page.url.pathname.split('/').filter(Boolean).pop() || '/';
  $: instructions = []
	onMount(() => {
		getMealById(currentPath).then((data) => {
			mealData = data[0];
      instructions = mealData.strInstructions.split(".")
      instructions = instructions.map((instruction) => {
        if (!instruction) return ""
        else if (instruction[instruction.length-1] === "!") return instruction
        else return instruction + "."
      })
		});
	});
</script>

<main class="h-dvh w-dvw">
	<a href="#">
		<img class="rounded-t-lg" src={mealData.strMealThumb} alt="recipe" />
	</a>
	<div class="p-5">
		<a href="#">
			<h5 class="mb-2 text-2xl font-medium tracking-tight">Ingredients needed:</h5>
		</a>
		<ul class="mb-3 grid grid-cols-2 gap-1 font-normal">
			{#each { length: 20 } as ing, i}
				{#if mealData[`strIngredient${i + 1}`]}
					<li>
						<label class="flex items-center">
							<input type="checkbox" class="mr-2" />
							{mealData[`strIngredient${i + 1}`]}
						</label>
					</li>
				{/if}
			{/each}
		</ul>
		<h5 class="mb-2 text-2xl font-medium tracking-tight">
			Instructions:
		</h5>
    {#each instructions as instruction }
		<p class="pb-2">{instruction}</p>
      
    {/each}
	</div>
</main>
