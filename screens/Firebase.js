import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCDd1M8874za37wxH-6v2Gd_hJ5hwW1iu0",
    authDomain: "aulamobile-chirleny.firebaseapp.com",
    projectId: "aulamobile-chirleny",
    storageBucket: "aulamobile-chirleny.appspot.com",
    messagingSenderId: "568487240415",
    appId: "1:568487240415:web:39086e9a71edbfb5bcbf6a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);