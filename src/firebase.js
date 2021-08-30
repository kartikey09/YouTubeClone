import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCk6ZxG_CUEW4I_kbNSG8JQdh_6iw610zo",
    authDomain: "yt-clone-bfb54.firebaseapp.com",
    projectId: "yt-clone-bfb54",
    storageBucket: "yt-clone-bfb54.appspot.com",
    messagingSenderId: "83088028796",
    appId: "1:83088028796:web:da81a33bb54cb2ef9d45f9"
};


const app = initializeApp(firebaseConfig)

export default app;
