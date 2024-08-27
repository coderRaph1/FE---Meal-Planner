<script>
	import { onMount } from 'svelte';
	import { getCategories } from '../utils/api';
	import { goto } from '$app/navigation';

	let categories = [];

	onMount(() => {
		getCategories().then((fetchedCategories) => {
			categories = fetchedCategories;
			
			
		});
	});

	function handleCategoryClick(category) {
		goto(`/choose-meals/meals?category=${category}`);
	}
</script>

<div class="hide-scroll-bar flex overflow-x-scroll pb-4">
	<div class="flex flex-nowrap gap-2 mx-2">
		{#each categories as category}
		<div class="flex flex-col rounded-lg shadow-2xl bg-emerald-200 aspect-videoitems-center justify-center w-28 border border-1 border-black">

			<img  class="object-cover aspect-video grow w-full mb-2 pt-2" src={category.strCategoryThumb} alt="of {category.strCategory}" />
			<button
			on:click={() => handleCategoryClick(category.strCategory)}
			class="w-full rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-gray-100 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500"
			>
			{category.strCategory}
		</button>
	</div>
		{/each}

	</div>
</div>



