// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb8kqlOWDJJde0XhEyYoCIWLAOi0ycQgM",
  authDomain: "nohate-auth.firebaseapp.com",
  projectId: "nohate-auth",
  storageBucket: "nohate-auth.firebasestorage.app",
  messagingSenderId: "615309556364",
  appId: "1:615309556364:web:52bfe357b27c76ddf259a9",
  measurementId: "G-178NGYP042",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // You need to get the auth instance properly here


const submitSignup = document.getElementById("submit-signup");

submitSignup.addEventListener("click", async function (event) {
  console.log("submit-signup call");

  event.preventDefault();
  console.log("submit-signup call");

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const fullname = document.getElementById("full-name").value.trim();

  if (!email || !password || !fullname) {
    alert("Please fill in all fields.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least six characters long.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update the user's profile with the full name
    await updateProfile(user, {
      displayName: fullname, // Set the user's display name
    });

    console.log(user);
    alert(`Account created successfully! Welcome, ${user.displayName}!`);
    window.location.href = "/index.html";

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    console.error("Signup error:", errorCode, errorMessage);

    // Handle authentication errors
    switch (errorCode) {
      case "auth/email-already-in-use":
        alert("This email is already registered. Please use a different email or log in.");
        break;
      case "auth/invalid-email":
        alert("Invalid email format. Please enter a valid email.");
        break;
      case "auth/weak-password":
        alert("Password is too weak. It must be at least six characters long.");
        break;
      default:
        alert("Error: " + errorMessage);
    }
  }
});
