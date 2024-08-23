<script>
	import { onMount } from 'svelte';
	import { userDetails } from '../../stores.js';
	import { getListsForUser, postNewList } from '../../api.js';

	let userLists = [];
	onMount(() => {
		getListsForUser($userDetails.user.user_id).then((data) => {
			userLists = data.lists;
			console.log(data, 'data');
			console.log(userLists);
		});
	});

	let list_name;
	let isPrivate = false;
	$: console.log(list_name, isPrivate);

	function handleClick() {
		postNewList(list_name, isPrivate).then((data) => {
			console.log(data);
		});
	}
</script>

<h1>My Lists</h1>
<ul>
	{#each userLists as list}
		<li>{list.list_name}</li>
	{/each}
</ul>
<label for="newListName">List name</label>
<input type="text" id="newListName" bind:value={list_name} />
<label for="isPrivate">Private</label>
<input type="checkbox" bind:checked={isPrivate} />
<button on:click={handleClick}>Add new List</button>
