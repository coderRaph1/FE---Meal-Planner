<script>
	import { onMount } from 'svelte';
	import { listData } from '../stores';
	import { deleteItem, getListById, postItem } from '../api';

	let showEdit = 'hide';
	let item_name;
	let amount;
	let isErr = false;
	const handleClick = () => {
		const item_name_copy = item_name;
		const amount_copy = amount;
		let prev;
		if (item_name && amount) {
			listData.update((curr) => {
				const copy = JSON.parse(JSON.stringify(curr));
				prev = [...copy.list];
				copy.list.push({ item_name, amount });
				item_name = '';
				amount = 0;
				return copy;
			});
			postItem($listData.list_id, item_name_copy, amount_copy).catch((err) => {
				isErr = true;
				listData.update((curr) => {
					const copy = JSON.parse(JSON.stringify(curr));
					copy.list = prev;
					return copy;
				});
			});
		}
	};

	function handleEditClick() {
		showEdit = showEdit === 'hide' ? 'show' : 'hide';
	}

	function handleDelete(index) {
		return function deleter() {
			let prev;
			listData.update((curr) => {
				const copy = JSON.parse(JSON.stringify(curr));
				prev = [...copy.list];
				copy.list.splice(index, 1);
				return copy;
			});
			return deleteItem($listData.list_id, index).catch((err) => {
				isErr = true;
				listData.update((curr) => {
					const copy = JSON.parse(JSON.stringify(curr));
					copy.list = prev;
					return copy;
				});
			});
		};
	}
</script>

<h1>{$listData.list_name}</h1>
{#if isErr}
	<h2>An error has occured</h2>
{/if}
<button on:click={handleEditClick}>Edit Items</button>
<ul>
	<div class="max-w-fit">
		{#each $listData.list as item, index}
			<section
				class="mt-4 flex flex-row rounded-lg  justify-between border border-gray-200 bg-white p-4 shadow sm:p-8 md:w-32 lg:w-96 dark:border-gray-700 dark:bg-gray-800"
			>
				<li>{item.amount} x {item.item_name}</li>
				<button
					class="bg-gradient-to-trpx-4 mb-2 self-center rounded-md py-2 outline {showEdit}"
					on:click={handleDelete(index)}>Delete Item</button
				>
			</section>
		{/each}
	</div>
</ul>

<form class={showEdit}>
	<section
		class="mt-4 flex-col w-full flex place-items-center gap-3 rounded-lg border outline-offset-1 border-gray-200 p-4 shadow sm:p-8 dark:border-gray-700 dark:bg-gray-800"
	>
		<label for="new-Item">Item Name</label>
		<input type="text" id="new-Item" bind:value={item_name} />
		<label for="amount">amount</label>
		<input type="number" id="amount" bind:value={amount} />

		<button on:click={handleClick}>Add item</button>
	</section>
</form>

<style>
	.hide {
		display: none;
	}
</style>
