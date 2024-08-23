<script>
    import LoginWithGoogle from "../Components/Login-in-with-google.svelte"
    import {userDetails} from "../stores"
</script>


{#if !$userDetails.user.user_id}
    <LoginWithGoogle />
{/if}
