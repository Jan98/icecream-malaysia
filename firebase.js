// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD68q6PvyYFP6obof7yJZDK2wiyKBmLQXU",
    authDomain: "fir-auth-cc8da.firebaseapp.com",
    projectId: "fir-auth-cc8da",
    storageBucket: "fir-auth-cc8da.appspot.com",
    messagingSenderId: "56615392710",
    appId: "1:56615392710:web:baca436e48addd46d68ec7"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };