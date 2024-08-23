<script>
	import { getLists } from "../../api";
	import {onMount} from 'svelte'
	import Navbar from "../../Components/Navbar.svelte"
	import {userDetails} from '../../stores.js'
	    import Modal from '../../Components/Modal.svelte'
	let showModal = false
	$: userLists=[];

	onMount(() => {
		//console.log(lists,'<<<list value')
		getLists($userDetails.user.user_id).then((response) => {
			console.log(response.user.lists,'<<<lists')
			userLists = [...response]
		});
	});
 
	const handleClose = () => {
        showModal = false
    }
</script>

<Navbar/>
<main class="h-dvh w-dvw flex flex-col">

	<h1 class="pt-4 text-center">My Lists{userLists}</h1>
	
	<div class="flex gap-2 self-center">
		{#each userLists as eachlist}
		<section class="border border-purple-500 p-2">
			<p><strong>{eachlist.list_name}</strong></p>
		</section>
		{/each}
	</div>
	<button
	class="block rounded-lg max-w-60  mx-auto mt-4 bg-blue-700 px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
	type="button" on:click={() => showModal = true}>Add a list</button
>

<!-- Main modal -->
<Modal show={showModal} on:close={handleClose}/>
</main>


