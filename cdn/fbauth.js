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
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Sign in with popup
  const provider = new firebase.auth.GoogleAuthProvider();
  document.getElementById('login').addEventListener('click', () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        // User signed in
        window.location.replace("http://portunus.run.place/home");
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("message").innerHTML = "<p class='error-message'>Login failed. Please try again.</p>";
      });
  });
  
  // Listen for authentication state changes
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('User is logged in:', user);
      // Additional logic if needed when the user is logged in
    } else {
      console.log('No user is logged in');
      // Additional logic if needed when no user is logged in
    }
  });
  