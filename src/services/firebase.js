import firebase from "firebase/app";
import "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyC70afKKx1FoIVtaGBOB23ESsV4IBhFVkQ",
    authDomain: "fir-auth-64d2d.firebaseapp.com",
    projectId: "fir-auth-64d2d",
    storageBucket: "fir-auth-64d2d.appspot.com",
    messagingSenderId: "835153690743",
    appId: "1:835153690743:web:5b3ab4a3ecff9e14c30672"
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { firebase, auth, app};