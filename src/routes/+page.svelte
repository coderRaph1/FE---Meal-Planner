<script>
    import LoginWithGoogle from "../Components/Login-in-with-google.svelte"
    import {browser} from "$app/environment"
    import {userDetails} from "../stores"
    import Calendar from '../Components/Calendar.svelte';
	import Navbar from "../Components/Navbar.svelte";
    let user_id = ""
    if (browser) {
        user_id = localStorage.getItem("user")
    }
</script>


{#if !user_id}
    <LoginWithGoogle />
{:else}
<Navbar />
<main class="p-2">
	<Calendar />
</main>
{/if}
