<script>
	import { onMount } from 'svelte';
	import { getCategories } from '../utils/api';

	let categories = [];

	onMount(() => {
		getCategories().then((fetchedCategories) => {
			categories = fetchedCategories;
		});
	});
</script>

<div class="inline-flex rounded-md shadow-sm">
	{#each categories as category}
		<a
			href={`/meals/${category.strCategory}`}
			aria-current="page"
			class="rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-gray-100 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
			>{category.strCategory}
		</a>
	{/each}
</div>
