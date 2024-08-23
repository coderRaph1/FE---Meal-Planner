<script>
    import {createEventDispatcher} from 'svelte';
    import { getLists, postNewList } from '../../src/api';
	import {goto} from '$app/navigation'

    import { onMount } from 'svelte';
    import { userDetails } from '../stores';
	import { GoogleAuthProvider } from 'firebase/auth';
    let isPrivate = false;
	let list_name = '',
		addPeople = '';

	
	//let savestore = false;
    let list_id = 2
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
  
    export let show = true;
    const close = (e) =>{
        e.preventDefault()
        show=false;
        const newList = {
			list_id: list_id,
			list_name: list_name,
			isPrivate: isPrivate
		};
		postNewList($userDetails.user.user_id,newList).then((response) => {
            console.log(response,'<<<in the modal')
			goto("/shopping-list")
		});
        dispatch('close')

    }

  </script>
  
{#if show}
<!-- Modal toggle -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<section class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50" on:click={close}>
    <section class="mx-auto my-52 max-w-sm bg-white rounded-lg shadow-xl p-10" on:click|stopPropagation>
        <h3 class="text-lg font-medium mb-4">Add a List</h3>
        <fieldset class="mb-5">
            <label for="list-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your list name</label>
            <input type="text" id="list-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="list_name" bind:value={list_name} required />
          </fieldset>
          <fieldset class="mb-5">
            <label for="add-people" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add people</label>
            <input type="text" id="add-people" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required bind:value={addPeople}/>
          </fieldset>
          <fieldset class="flex items-start mb-5">
            <section class="flex items-center h-5">
              <input id="is-private" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required bind:checked={isPrivate}/>
            </section>
            <label for="is-private" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Private</label>
          </fieldset>
        <section class="flex justify-end">
            <button class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400" type="submit" on:click={close}>Save</button>
        </section>

    </section>
    </section>
  {/if}