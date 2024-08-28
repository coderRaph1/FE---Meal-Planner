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
<main class="flex h-dvh w-dvw flex-col items-center px-2">
	<h1 class="pt-4 text-center">My Lists</h1>
	<button
		data-modal-target="default-modal"
		data-modal-toggle="default-modal"
		class="mb-2 w-fit self-center rounded-md bg-gradient-to-tr from-teal-200 to-teal-100 px-4 py-2 outline"
		type="button"
		on:click={() => (showModal = !showModal)}>Add a list</button
	>
	<button
		data-modal-target="default-modal"
		data-modal-toggle="default-modal"
		class="block rounded-lg bg-teal-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
		type="button"
		on:click={handleEditClick}>Edit lists</button
	>
	<ul>
		{#each $userLists as list, index}
			<section class="flex flex-row gap-3 max-w-lg"><button
				class="mb-3 mt-2 w-60 self-center rounded-md px-4 py-2 outline"
				style="display: block;"
				on:click={() => {
					handleClick(list.list_id);
				}}>{list.list_name}</button
			>
			<button
				class="mb-2 w-28 self-center rounded-md bg-gradient-to-tr from-teal-200 to-teal-100 px-4 py-2 outline {showEdit}"
				on:click={() => {
					deleteList(index);
				}}>Delete list</button
			></section>
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
</main>

<style>
	.hide {
		display: none;
	}
</style>
