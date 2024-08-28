<script>
	import { onMount } from 'svelte';
	import { listData, userDetails, userLists } from '../../stores.js';
	import { deleteListFromAUser, getListById, getListsForUser } from '../../api.js';
	import Modal from '../../Components/Modal.svelte';
	import ListItems from '../../Components/ListItems.svelte';
	import Navbar from '../../Components/Navbar.svelte';

	let showModal = false;
	let isErr = false;
	onMount(() => {
		getListsForUser($userDetails.user.user_id).then((data) => {
			userLists.update(() => data.lists);
		});
	});

	function handleClick(list_id) {
		getListById(list_id).then((data) => {
			listData.update(() => data.list);
		});
	}
	let showEdit = 'hide';
	function handleEditClick() {
		showEdit = showEdit === 'hide' ? 'show' : 'hide';
	}

	function deleteList(index) {
		let curr = [...$userLists];

		userLists.update((curr) => {
			console.log(curr);
			curr.splice(index, 1);
			return curr;
		});
		console.log(curr);
		console.log(curr[index].list_id);
		return deleteListFromAUser($userDetails.user.user_id, curr[index].list_id).catch((err) => {
			isErr = true;
			userLists.update(() => curr);
		});
	}
</script>

<Navbar />
<h1>My Lists</h1>
<button
	data-modal-target="default-modal"
	data-modal-toggle="default-modal"
	class="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
	type="button"
	on:click={() => (showModal = !showModal)}>Add a list</button
>
<button
	data-modal-target="default-modal"
	data-modal-toggle="default-modal"
	class="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
	type="button"
	on:click={handleEditClick}>Edit lists</button
>
<ul>
	{#each $userLists as list, index}
		<button
			style="display: block;"
			on:click={() => {
				handleClick(list.list_id);
			}}>{list.list_name}</button
		>
		<button
			class={showEdit}
			on:click={() => {
				deleteList(index);
			}}>Delete list</button
		>
	{/each}
</ul>
{#if isErr}
	<p>An error has occured</p>
{/if}
<!-- <label for="newListName">List name</label>
<input type="text" id="newListName" bind:value={list_name} />
<label for="isPrivate">Private</label>
<input type="checkbox" bind:checked={isPrivate} />
<button on:click={handleClick}>Add new List</button> -->
{#if $listData}
	<ListItems />
{/if}
<Modal show={showModal} />

<style>
	.hide {
		display: none;
	}
</style>
