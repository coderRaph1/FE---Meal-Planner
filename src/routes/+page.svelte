<script>
    import LoginWithGoogle from "../Components/Login-in-with-google.svelte"

    import { onMount } from 'svelte';
    import { userDetails } from '../stores';

	let savestore = false;
	$: if (savestore && $userDetails) {
		window.sessionStorage.setItem('store', JSON.stringify($userDetails));
	}
	onMount(async () => {
		let ses = window.sessionStorage.getItem('store');
		if (ses) {
			console.log('sob-- ~ loading ses', ses);
			$userDetails = JSON.parse(ses);
            console.log($userDetails,'<<<')
		}
		savestore = true;
	});
 
</script>


<LoginWithGoogle />
