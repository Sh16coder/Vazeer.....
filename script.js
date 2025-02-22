<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyD9ByIFYJKfxc4Cmkfdc6t8yBWEO2NctL4",
    authDomain: "vazeer-classes-e6ee0.firebaseapp.com",
    projectId: "vazeer-classes-e6ee0",
    storageBucket: "vazeer-classes-e6ee0.appspot.com",
    messagingSenderId: "934910649671",
    appId: "1:934910649671:web:af8ade4a28ccbfafaf5862",
    measurementId: "G-PTXEY6P35S"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Login function
  window.login = function() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        document.getElementById('status').innerText = "Login Successful!";
      })
      .catch((error) => {
        document.getElementById('status').innerText = error.message;
      });
  };

  // Signup function
  window.signup = function() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        document.getElementById('status').innerText = "Account Created!";
      })
      .catch((error) => {
        document.getElementById('status').innerText = error.message;
      });
  };

  // Logout function
  window.logout = function() {
    signOut(auth)
      .then(() => {
        document.getElementById('status').innerText = "Logged Out!";
      })
      .catch((error) => {
        document.getElementById('status').innerText = error.message;
      });
  };
</script>
