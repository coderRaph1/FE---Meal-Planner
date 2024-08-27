<script>
	import { afterUpdate, beforeUpdate, onMount } from 'svelte';
	import { userDetails, userLists } from '../../stores.js';
	import { getListsForUser, postNewList, postNewListByUSerId } from '../../api.js';
	import Modal from '../../Components/Modal.svelte';

	let showModal = false;
	onMount(() => {
		getListsForUser($userDetails.user.user_id).then((data) => {
			userLists.update(() => data.lists);
		});
	});
</script>

<h1>My Lists</h1>
<button
	data-modal-target="default-modal"
	data-modal-toggle="default-modal"
	class="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
	type="button"
	on:click={() => (showModal = !showModal)}>Add a list</button
>
<ul>
	{#each $userLists as list}
		<button style="display: block;">{list.list_name}</button>
	{/each}
</ul>
<!-- <label for="newListName">List name</label>
<input type="text" id="newListName" bind:value={list_name} />
<label for="isPrivate">Private</label>
<input type="checkbox" bind:checked={isPrivate} />
<button on:click={handleClick}>Add new List</button> -->
<Modal show={showModal} {userLists} />
