
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCyIEWg3c2rjO4CgMr9mcsui0bvT5gLCN0",
    authDomain: "bootcampchat-b9794.firebaseapp.com",
    projectId: "bootcampchat-b9794",
    storageBucket: "bootcampchat-b9794.appspot.com",
    messagingSenderId: "197535382814",
    appId: "1:197535382814:web:fedb13f39b895df67fdd0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth =  getAuth(app);

