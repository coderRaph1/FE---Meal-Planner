<script>
	export let idMeal;
	export let strMeal;
	export let strMealThumb;
</script>

<a
	href={`/choose-meals/meals/${idMeal}`}
	class="w-full outline outline-1 bg-gradient-to-tr from-teal-200 to-teal-100 shadow-lg mb-2"
>
	<img
		class="object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
		src={strMealThumb}
		alt={strMeal}
	/>
		<h5 class="m-2 text-xl font-bold tracking-tight text-left">{strMeal}</h5>
</a>
