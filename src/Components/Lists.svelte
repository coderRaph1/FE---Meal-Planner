<script>

    import { onMount } from 'svelte';
    import { userDetails } from '../stores';
    import Modal from '../Components/Modal.svelte'
    let showModal = false
	// let savestore = false;
	// $: if (savestore && $userDetails) {
	// 	window.sessionStorage.setItem('store', JSON.stringify($userDetails));
	// }
	// onMount(async () => {
	// 	let ses = window.sessionStorage.getItem('store');
	// 	if (ses) {
	// 		console.log('sob-- ~ loading ses', ses);
	// 		$userDetails = JSON.parse(ses);
    //         console.log($userDetails,'<<<')
	// 	}
	// 	savestore = true;
	// });
 
    const handleClose = () => {
        showModal = false
    }
</script>

<h1>My Lists</h1>
<button
	data-modal-target="default-modal"
	data-modal-toggle="default-modal"
	class="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
	type="button" on:click={() => showModal = true}>Add a list</button
>

<!-- Main modal -->
<Modal show={showModal} on:close={handleClose}/>
