<script>
	import Categories from '../../Components/Categories.svelte';
	import Favourites from '../../Components/Favourites.svelte';
	import Navbar from '../../Components/Navbar.svelte';
	import Searchbar from '../../Components/Searchbar.svelte';
	import Recommendation from '../../Components/Recommendation.svelte';
</script>

<Navbar />
<Searchbar />
<h1>Favourites</h1>
<Favourites />
<h1>Categories</h1>
<Categories />
<h1>Recommendations</h1>
<Recommendation/>
<button
	type="button"
	class="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
	>Add Items to List</button
>
