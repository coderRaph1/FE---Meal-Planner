<script>
	import Categories from '../../Components/Categories.svelte';
	import MealCard from '../../Components/MealCard.svelte';
	import Navbar from '../../Components/Navbar.svelte';
	import Searchbar from '../../Components/Searchbar.svelte';
</script>

<Navbar />
<Searchbar />
<section>
	<h1>Favourites</h1>
	<MealCard />
</section>

<section>
	<h1>Categories</h1>
	<Categories />
</section>
