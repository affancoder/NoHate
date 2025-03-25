// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// import {
//   getAuth,
//   signInWithEmailAndPassword ,
// } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";


// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBb8kqlOWDJJde0XhEyYoCIWLAOi0ycQgM",
//   authDomain: "nohate-auth.firebaseapp.com",
//   projectId: "nohate-auth",
//   storageBucket: "nohate-auth.firebasestorage.app",
//   messagingSenderId: "615309556364",
//   appId: "1:615309556364:web:52bfe357b27c76ddf259a9",
//   measurementId: "G-178NGYP042",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);  // You need to get the auth instance properly here

// //inputs

// const submit = document.getElementById("submit");
// submit.addEventListener("click", function (event) {
//   event.preventDefault();
  
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
  
//   signInWithEmailAndPassword(auth,email, password)
//   .then((userCredential) => {
//       // Signed up
//       const user = userCredential.user;
//       console.log(user)
//       // alert("Signin successfully...");
//       window.location.href = "/index.html";
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // console.log(error)
//       alert(errorMessage);
//       // ..
//     });
// });

// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb8kqlOWDJJde0XhEyYoCIWLAOi0ycQgM",
  authDomain: "nohate-auth.firebaseapp.com",
  projectId: "nohate-auth",
  storageBucket: "nohate-auth.firebasestorage.app",
  messagingSenderId: "615309556364",
  appId: "1:615309556364:web:52bfe357b27c76ddf259a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get the submit button
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();

  // Get user input values
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  // Attempt to sign in
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // alert("Login successful!");
      window.location.href = "/index.html"; // Redirect after successful login
    })
    .catch((error) => {
      console.error("Login error:", error.code, error.message);

      // Handle authentication errors
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Incorrect email or password. Please try again.");
          break;
        case "auth/user-not-found":
          alert("No account found with this email. Please check your email or sign up.");
          break;
        case "auth/wrong-password":
          alert("Incorrect password. Please try again.");
          break;
        case "auth/invalid-email":
          alert("Invalid email format. Please enter a valid email.");
          break;
        case "auth/too-many-requests":
          alert("Too many failed attempts. Please try again later.");
          break;
        default:
          alert("Error: " + error.message);
      }
    });
});
