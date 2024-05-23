// If you are looking at this, please help me I hate firebase
// the voices are getting louder who cooked this up please fucking help
// please fuck this shit please the voices are getting louder PLEASEEEEEE

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6bb3PcRQmnfGkx9ef00KMJ9XsIi57170",
    authDomain: "portunus-web.firebaseapp.com",
    projectId: "portunus-web",
    storageBucket: "portunus-web.appspot.com",
    messagingSenderId: "858044349547",
    appId: "1:858044349547:web:31414f32c015176994052e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Sign in with popup
const provider = new GoogleAuthProvider();
document.getElementById('login').addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // User is signed in
      window.location.replace("http://portunus.run.place/home");
      console.log(result.user);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Sign out
document.getElementById('logout').addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log('User signed out.');
  }).catch((error) => {
    console.error(error);
  });
});
