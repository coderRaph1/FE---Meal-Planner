<script>
	import { onMount } from 'svelte';
	import { listData } from '../stores';
	import { getListById } from '../api';
</script>

<h1>{$listData.list_name}</h1>
<ul>
	{#each $listData.list as item}
		<li>{item.item_name}</li>
	{/each}
</ul>
