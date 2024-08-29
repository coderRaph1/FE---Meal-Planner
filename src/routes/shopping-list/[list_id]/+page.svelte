<script>
	import { postItem, deleteItem } from '../../../api';
	import Navbar from '../../../Components/Navbar.svelte';
	export let data;
	const listObj = data.listObj;
	const list_id = data.list_id;
	let items = listObj.list.items;
	let item_name;
	let amount;
	let error = false;
	let showEdit = 'hide';
	

	function handleClick() {
		if (item_name && amount) {
			items = [...items, { item_name, amount }];
		}

		postItem(list_id, item_name, amount).catch(() => {
			items = items.slice(0, items.length - 1);
			error = true;
		});
		item_name = '';
		amount = '';
	}

	function handleClickEdit() {
		if (showEdit === 'hide') {
			showEdit = 'show';
		} else {
			showEdit = 'hide';
		}
	}

	function generateDelete(index) {
		return function deleter() {
			const beforeDelete = [...items];
			items.splice(index, 1);
			items = items;

			deleteItem(list_id, index).catch(() => {
				error = true;
				items = beforeDelete;
			});
		};
	}
</script>

<Navbar />
<h1 style="display: inline-block">{listObj.list.list_name}</h1>
<button style="display: inline-block;" on:click={handleClickEdit}>Edit</button>
<ul>
	{#each items as item, index}
		<li>
			<button style="padding: 10px;" class={showEdit} on:click={generateDelete(index)}
				>Delete</button
			>{item.amount} x {item.item_name}
			{index}
		</li>
	{/each}
</ul>
{#if error}
	<p>An error has occured</p>
{/if}
<button class={showEdit}>Clear All</button>
<form>
	<label for="new-Item">Item Name</label>
	<input type="text" id="new-Item" bind:value={item_name} />
	<label for="amount">amount</label>
	<input type="number" id="amount" bind:value={amount} />
	<button on:click={handleClick}>Add item</button>
</form>

<style>
	.hide {
		display: none;
	}

	span:hover {
		color: red;
	}

	button .show {
		height: fit-content;
		padding: 0px;
	}
</style>
