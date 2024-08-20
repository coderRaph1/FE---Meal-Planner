<script>
	import { firebaseConfig, app, db } from '../firebase.config';
	import { goto } from '$app/navigation';
	import { getFirestore } from 'firebase/firestore';
	import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
	import { doc, setDoc } from 'firebase/firestore';

	const auth = getAuth();
	const users = auth.currentUser;

	function handleClick() {
		signInWithPopup(auth, new GoogleAuthProvider())
			.then((result) => {
				console.log('Successfully signed in:', result.user);
				goto('/calendar'); // Navigate to calendar after SUCCESSFUL sign-in

				return result.user;
			})
			.then((res) => {
				console.log(res, 'this is the rizz');
				const splitName = res.displayName.split(' ');
				const firstName = splitName[0];
				const lastName = splitName[1];
				setDoc(doc(db, 'users', res.email), {
					first_name: firstName,
					last_name: lastName,
					username: res.displayName,
					email: res.email,
					avatarURL: res.photoURL
				});
			})
			.catch((error) => {
				console.error('Error signing in:', error);
			});
	}
</script>

<h1>Login</h1>

<button on:click={handleClick}>Sign Up!</button>
