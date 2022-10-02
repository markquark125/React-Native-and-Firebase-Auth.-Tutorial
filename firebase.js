// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compact";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEhpUMV7RtEwFQWy1y6GMgrym_Svldlos",
  authDomain: "fir-auth-a6c29.firebaseapp.com",
  projectId: "fir-auth-a6c29",
  storageBucket: "fir-auth-a6c29.appspot.com",
  messagingSenderId: "310187864476",
  appId: "1:310187864476:web:04e2bd418d8a4302c65859"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.app()
}

const auth = firebase.auth()

export {auth };