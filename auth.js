import { auth } from "./firebase-config.js";
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-btn");
    const signupButton = document.getElementById("signup-btn");

    if (loginButton) {
        loginButton.addEventListener("click", login);
    }
    if (signupButton) {
        signupButton.addEventListener("click", signUp);
    }
});

function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login Successful!");
            window.location.href = "homepage.html"; // Redirect to homepage
        })
        .catch(error => {
            document.getElementById("login-error").innerText = error.message;
        });
}

function signUp() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Signup Successful! Redirecting to login...");
            window.location.href = "login.html"; // Redirect to login page
        })
        .catch(error => {
            document.getElementById("signup-error").innerText = error.message;
        });
}
