const { initializeApp } = firebase;
const { getAuth, signInWithPopup, GoogleAuthProvider, signOut, updateProfile } = firebase.auth;

console.log(updateProfile)

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

try {
    const updateprofile = document.getElementById('updateprofile');
    if (updateprofile) {
        updateprofile.addEventListener('click', () => {
            const DisplayName = document.getElementById('updatedisplay').value

            if (DisplayName) {
                if (document.getElementById('agreeCheckbox').checked) {
                    var userNow = firebase.auth().currentUser;
                    userNow.updateProfile({
                        displayName: DisplayName,
                        photoURL: "https://portunus.run.place/favicon.ico"
                    });

                    window.location.replace("http://portunus.run.place/home");
                } else {
                    document.getElementById("message").innerHTML = "<p class='error-message'>You are required to agree to our Terms of Service and our Privacy Policy.</p>";
                }
            } else {
                document.getElementById("message").innerHTML = "<p class='error-message'>Please set your DisplayName.</p>";
            }
        });
    }
} catch (error) {
    console.log('Error:', error);
}


// Sign in with email/password
const loginButton = document.getElementById('login');
if (loginButton) {
    loginButton.addEventListener('click', () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email) {

        } else {
            document.getElementById("message").innerHTML = "<p class='error-message'>Please fill in your email address.</p>";
            return;
        }

        if (password) {

        } else {
            document.getElementById("message").innerHTML = "<p class='error-message'>Please fill in your password.</p>";
            return;
        }

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                document.getElementById("message").innerHTML = "<p class='success-message'>Login completed. Please wait.</p>";
                document.body.innerHTML = '';
                window.location.replace("http://portunus.run.place/home");
                console.log(userCredential.user);

                submitBtn.innerHTML = "<div class='loader'></div>";

                const submitBtn = document.getElementById("login")

                document.getElementById("email").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("agreeCheckbox").disabled = true;
                submitBtn.disabled = true;
                document.getElementById("message").innerHTML = "<p class='warning-message'></p>";
            })
            .catch((error) => {
                console.error(error);

                // Animation
                const submitBtn = document.getElementById("login")
                submitBtn.innerHTML = "<div class='loader'></div>";

                if (error.code === 'auth/invalid-email') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>The email address is badly formatted.</p>";
                } else if (error.code === 'auth/user-not-found') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>No user found with this email.</p>";
                } else if (error.code === 'auth/wrong-password') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>Incorrect credentials. Please try again.</p>";
                } else if (error.code === 'auth/invalid-login-credentials') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>Incorrect credentials. Please try again.</p>";
                } else if (error.code === 'auth/user-disabled') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>This account has been suspended. Please contact an Administrator if you believe this is an error.</p>";
                } else if (error.code === 'auth/network-request-failed') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>Failed to send. Are you connected to the internet?</p>";
                } else if (error.code === 'auth/internal-error') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>An internal server error occured. Please try again later.</p>";
                } else if (error.code === 'auth/no-auth-event') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>An invalid event was sent. Please contact an Administrator if the issue persists.</p>";
                } else if (error.code === 'auth/null-user') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>An internal server error occured. The specified user is null.</p>";
                } else if (error.code === 'auth/unverified-email') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>This user has not verified their email. Please verify the email before logging in.</p>";
                } else if (error.code === 'auth/user-not-found') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>The specified user does not exist.</p>";
                } else if (error.code === 'auth/too-many-requests') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>You are sending too many requests. Please try again later.</p>";
                } else if (error.code === 'auth/timeout') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>You have exceeded the operation timeout. Please try again.</p>";
                } else if (error.code === 'auth/quota-exceeded') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>This operation is temporarily disabled. Please try again later or contact an Administrator.</p>";
                } else if (error.code === 'auth/admin-restricted-operation') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>This operation only for an Administrator.</p>";
                } else if (error.code === 'auth/argument-error') {
                    document.getElementById("message").innerHTML = "<p class='error-message'>An argument error occured. Please try again and ensure all fields are filled out.</p>";
                } else {
                    document.getElementById("message").innerHTML = "<p class='error-message'>Login failed; Internal Server Error. Please try again.</p>";
                }
                document.getElementById("email").disabled = false;
                document.getElementById("password").disabled = false;
                document.getElementById("agreeCheckbox").disabled = false;
                submitBtn.disabled = false;
                submitBtn.innerHTML = "Login";
            });
    });
}

auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('User is logged in:', user);
        try {
            const myTag = document.getElementById('login');
            if (myTag) {
                document.body.innerHTML = '';
                window.location.replace("http://portunus.run.place/home");
            }
        } catch (error) {
            console.log('Error:', error);
        }

        try {
            const displayNameElement = document.getElementById('displayName');
            const user = auth.currentUser; 
            if (displayNameElement) {
                displayNameElement.innerHTML = `<a>Hello, ${user.displayName}</a>!`;
            }
        } catch (error) {
            console.log('Error:', error);
        }

        try {
            const myTag = document.getElementById('/RESTRICTED');
            const UPDATECHECK = document.getElementById('/UPDATE');
            var user = auth.currentUser;
            if (UPDATECHECK) {
                
            } else {
                if (myTag) {
                    if (firebase.auth().currentUser.displayName === "Null") {
                        window.location.replace("http://portunus.run.place/updateprofile");
                    } else {
                        if (firebase.auth().currentUser.displayName === "null") {
                            window.location.replace("http://portunus.run.place/updateprofile");
                        } else {
                            if (firebase.auth().currentUser.displayName === "nil") {
                                window.location.replace("http://portunus.run.place/updateprofile");
                            } else {
                                if (firebase.auth().currentUser.displayName === "") {
                                    window.location.replace("http://portunus.run.place/updateprofile");
                                } else {
                                    if (firebase.auth().currentUser.displayName === null) {
                                        window.location.replace("http://portunus.run.place/updateprofile");
                                    } else {
                                        if (firebase.auth().currentUser.displayName === nil) {
                                            window.location.replace("http://portunus.run.place/updateprofile");
                                        } else {
                                            if (firebase.auth().currentUser.displayName === Null) {
                                                window.location.replace("http://portunus.run.place/updateprofile");
                                            } else {
                                                if (firebase.auth().currentUser.displayName === Nil) {
                                                    window.location.replace("http://portunus.run.place/updateprofile");
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } catch (error) {
            console.log('Error:', error);
        }
    } else {
        try {
            const myTag = document.getElementById('/RESTRICTED');
            if (myTag) {
                document.body.innerHTML = '';
                window.location.replace("http://portunus.run.place/login"); v
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }
});

const logoutButton = document.getElementById('logout');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        firebase.auth().signOut().then(function () {
            console.log('User signed out.');
        }).catch((error) => {
            console.error(error);
        });
    });
}

const forgotpasswordButton = document.getElementById('forgotpassword');
if (forgotpasswordButton) {
    forgotpasswordButton.addEventListener('click', () => {
        const agreeCheckbox = document.getElementById('agreeCheckbox');
        const auth = firebase.auth();
        const emailAddress = document.getElementById('email').value;

        if (agreeCheckbox && agreeCheckbox.checked) {
            auth.sendPasswordResetEmail(emailAddress).then(() => {
                document.getElementById("message").innerHTML = "<p class='success-message'>Email sent. Check your Email for a reset password link.</p>";
                forgotpasswordButton.innerHTML = "<div class='loader'></div>";
                document.getElementById("email").disabled = true;
                document.getElementById("agreeCheckbox").disabled = true;
                forgotpasswordButton.disabled = true;
            }).catch((error) => {
                document.getElementById("message").innerHTML = `<p class='error-message'>An internal error occured. Error: ${error.message}</p>`;
                document.getElementById("email").disabled = false;
                document.getElementById("agreeCheckbox").disabled = false;
                forgotpasswordButton.disabled = false;
                forgotpasswordButton.innerHTML = "Send Email";
            });
        } else {
            document.getElementById("message").innerHTML = "<p class='error-message'>You must confirm you are not a robot.</p>";
        }
    });
}