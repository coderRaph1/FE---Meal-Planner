<script>
	import { db, auth } from '../firebase.config';
	import { goto } from '$app/navigation';
	import { getFirestore } from 'firebase/firestore';
	import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
	import { doc, setDoc } from 'firebase/firestore';
	import { postUser } from '../api.js';
	import { userDetails } from '../stores';
	// const user = auth.currentUser;
	// const user_id = user.uid

	function handleClick() {
		signInWithPopup(auth, new GoogleAuthProvider())
			.then((result) => {
				console.log('Successfully signed in:', result.user);
				return result.user;
			})
			.then((user) => {
				const avatarURL = user.photoURL;
				const user_id = user.uid;
				const { displayName } = user;
				const splitName = displayName.split(' ');
				const first_name = splitName[0];
				const last_name = splitName[1];
				const userBody = {
					user_id,
					first_name,
					last_name,
					displayName,
					avatarURL
				};
				return postUser(userBody);
			})
			.then((user) => {
				// const { user_id } = user;
				//set it in store
				userDetails.update(() => user);
				localStorage.setItem('user', user)
				localStorage.setItem("avatar", user.avatarURL)
				localStorage.setItem("displayName", user.displayName)
				console.log(user.displayName, '<<<<');
				goto('/calendar'); // SUCCESSFUL sign-in
			})
			.catch((error) => {
				console.log('hihi');
				if (error.response.data.user) {
					const user = error.response.data.user
					userDetails.update(() => user);
					console.log("")
					localStorage.setItem('user', user.user_id)
					localStorage.setItem("avatar", user.avatarURL)
					localStorage.setItem("displayName", user.displayName)
					console.log(user.displayName, '<<<<');

					goto('/calendar');
				} else {
					console.error('Error signing in:', error);
				}
			});
	}
</script>

<div class="container">
	<h1>Welcome to The Daily Dish</h1>
	<h2>We take the work out of planning so you can focus on YOU!</h2>
	<button on:click={handleClick}>Sign In with Google!</button>
</div>
