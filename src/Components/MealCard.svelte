<script>
	export let idMeal;
	export let strMeal;
	export let strMealThumb;
</script>

<a
	href={`/choose-meals/meals/${idMeal}`}
	class="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:max-w-xl md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
>
	<img
		class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
		src={strMealThumb}
		alt={strMeal}
	/>
	<div class="flex flex-col justify-between p-4 leading-normal">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{strMeal}</h5>
	</div>
</a>
