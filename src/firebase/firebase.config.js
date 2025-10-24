// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAho-KRF4VulQSdh6M0yEweOKilNnFAA2M",
    authDomain: "dragon-news-app-67c71.firebaseapp.com",
    projectId: "dragon-news-app-67c71",
    storageBucket: "dragon-news-app-67c71.firebasestorage.app",
    messagingSenderId: "273663247283",
    appId: "1:273663247283:web:bddd2a3525211b8758c1c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
