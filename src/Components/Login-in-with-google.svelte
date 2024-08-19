<script>
import {firebaseConfig, app} from '../firebase.config'

import {getAuth,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
const auth = getAuth(app)

  const handleClick = () => {
    signInWithPopup(auth,new GoogleAuthProvider())
  }
</script>




<h1>Login </h1>

<label for="username"> username
    <input id="username" name="username" type="text"/>
</label>
<label for="password"> password
    <input id="password" name="password" type="text"/>
</label>


<button on:click={handleClick}>Sign Up!</button>