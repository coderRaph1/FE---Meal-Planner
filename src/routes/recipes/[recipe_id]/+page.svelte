<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { getRecipeById } from '../../../api';
	 let currentPath = "/"
  	$: currentPath = $page.url.pathname.split('/').filter(Boolean).pop() || '/'
	$: recipeInfo = {}
	onMount(() => {
	  getRecipeById(currentPath)
	  .then(({recipe}) => {
		recipeInfo = recipe
	  })
	})
</script>

<main>
	<h1>you made it</h1>
	<p>{recipeInfo.cook_time}</p>
	<p>{recipeInfo.ingredients}</p>
	<p>{recipeInfo.instructions}</p>
	<p>{recipeInfo.prep_time}</p>
	<p>{recipeInfo.recipe_name}</p>
</main>