const { initializeApp } = firebase;
const { getAuth, signInWithPopup, GoogleAuthProvider, signOut } = firebase.auth;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6bb3PcRQmnfGkx9ef00KMJ9XsIi57170",
    authDomain: "portunus-web.firebaseapp.com",
    projectId: "portunus-web",
    storageBucket: "portunus-web.appspot.com",
    messagingSenderId: "858044349547",
    appId: "1:858044349547:web:31414f32c015176994052e"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign in with email/password
document.getElementById('login').addEventListener('click', () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById("message").innerHTML = "<p class='success-message'>Login completed. Please wait.</p>";
            window.location.replace("http://portunus.run.place/home");
            console.log(userCredential.user);

            const submitBtn = document.getElementById("login")

            document.getElementById("email").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("agreeCheckbox").disabled = true;
            submitBtn.disabled = true;
            submitBtn.innerHTML = "<div class='loader'></div>";
            document.getElementById("message").innerHTML = "<p class='warning-message'></p>";
        })
        .catch((error) => {
            console.error(error);

            // Animation
            document.getElementById("message").innerHTML = "<p class='error-message'>Login failed. Please try again.</p>";
            document.getElementById("email").disabled = false;
            document.getElementById("password").disabled = false;
            document.getElementById("agreeCheckbox").disabled = false;
            submitBtn.disabled = false;
            submitBtn.innerHTML = "Login";
        });
});

document.getElementById('logout').addEventListener('click', () => {
    signOut(auth).then(() => {
      console.log('User signed out.');
    }).catch((error) => {
      console.error(error);
    });
});  

auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('User is logged in:', user);
        try {
            const myTag = document.getElementById('login');
            if (myTag) {
                window.location.replace("http://portunus.run.place/home");
            }
        } catch (error) {
            console.log('Error:', error);
        }        
    } else {
        console.log('No user is logged in');
        try {
            const myTag = document.getElementById('/RESTRICTED');
            if (myTag) {
                window.location.replace("http://portunus.run.place/login");
            }
        } catch (error) {
            console.log('Error:', error);
        }   
    }
});

