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
const auth = getAuth(app);  // You need to get the auth instance properly here

const submitSignup = document.getElementById("submit-signup");
submitSignup.addEventListener("click",async function (event) {
console.log("submit-signup call")

event.preventDefault();
console.log("submit-signup call")
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const fullname = document.getElementById("full-name").value;
  
  try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created successfully!");
    const user = userCredential.user;

    // Update the user's profile with the full name
    await updateProfile(user, {
      displayName: fullname // Set the user's display name
    });
    console.log(user)
    alert("Creating Account...");
    window.location.href = "/register.html";
    // ...
      }catch{

        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(error)
        alert(errorMessage);
      }
});
