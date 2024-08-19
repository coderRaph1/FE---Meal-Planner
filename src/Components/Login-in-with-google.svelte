<script>
import {firebaseConfig, app} from '../firebase.config'
import { goto } from '$app/navigation';

import {getAuth, signInWithPopup,GoogleAuthProvider, onAuthStateChanged} from 'firebase/auth'
	import Calendar from './Calendar.svelte';

function navigate() {
    goto('/calendar');
  }

const auth = getAuth()
const users = auth.currentUser
console.log(users)



let signedIn = false

onAuthStateChanged(auth, (user)=>{
  if (user !== null){
    signedIn = true
    console.log(user.displayName, '<<< hello')
  }
})


function handleClick () {
    signInWithPopup(auth,new GoogleAuthProvider())
  }

</script>


<h1>Login </h1>

<!-- if (authUser === undefined || isLoading) {
  return <AuthLoader />;
 }
 return <LoginComponentContents/> -->

 
 <a href="/calendar"><button on:click={handleClick}>Sign Up!</button></a>
 
 
 <!-- {#if signedIn === false} -->
 <!-- {:else}
 <buttton> Click here to enter the app </buttton> -->
 <!-- {/if} -->