<script>
	import { createEventDispatcher } from 'svelte';
	import { userDetails } from '../stores';
	import { postNewList, postNewListByUSerId } from '../../src/api';
	import Categories from './Categories.svelte';
	//let savestore = false;
	//let list_id = 2
	// $: if (savestore && $userDetails) {
	// 	window.sessionStorage.setItem('store', JSON.stringify($userDetails));
	// }
	// onMount(async () => {
	// 	let ses = window.sessionStorage.getItem('store');
	// 	if (ses) {
	// 		console.log('sob-- ~ loading ses', ses);
	// 		$userDetails = JSON.parse(ses);
	//           console.log($userDetails,'<<<')
	// 	}
	// 	savestore = true;
	// });

	const dispatch = createEventDispatcher();
	let list_name;
	let isPrivate = false;
	let addPeople;
	let showModal = false;
	export let userLists;
	export let show = true;
	const close = (e) => {
		e.preventDefault();
    userLists = [...userLists, list_name];
		// /console.log(list_name, '<<list name');
		postNewList(list_name, isPrivate)
			.then((data) => {
				console.log(data.list.list_id, '>>>>', $userDetails.user.user_id);
				return postNewListByUSerId(data.list.list_id, $userDetails.user.user_id);
			})
			.then((response) => {
        console.log(userLists,'<<user lists')
				return userLists ;
			});
		show = false;
		dispatch('close');
	};
	const handleClose = () => {
		//console.log('inside handle');
		
		showModal = false;
	};
</script>

{#if show}
	<!-- Modal toggle -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<section class="fixed left-0 top-0 z-50 h-full w-full bg-black bg-opacity-75" on:click={close}>
		<section
			class="mx-auto my-52 max-w-sm rounded-lg bg-white p-10 shadow-xl"
			on:click|stopPropagation
		>
			<h3 class="mb-4 text-lg font-medium">Add a List</h3>
			<fieldset class="mb-5">
				<label for="list-name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
					>Your list name</label
				>
				<input
					type="text"
					id="list-name"
					class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
					placeholder="list_name"
					bind:value={list_name}
					required
				/>
			</fieldset>
			<fieldset class="mb-5">
				<label for="add-people" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
					>Add people</label
				>
				<input
					type="text"
					id="add-people"
					class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
					required
					bind:value={addPeople}
				/>
			</fieldset>
			<fieldset class="mb-5 flex items-start">
				<section class="flex h-5 items-center">
					<input
						id="is-private"
						type="checkbox"
						value=""
						class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
						required
						bind:checked={isPrivate}
					/>
				</section>
				<label for="is-private" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>Private</label
				>
			</fieldset>
			<section class="flex justify-end">
				<button
					class="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-400"
					type="submit"
					on:click={close}
					on:close={handleClose}>Save</button
				>
			</section>
		</section>
	</section>
{/if}
