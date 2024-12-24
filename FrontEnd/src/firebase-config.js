import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCIk2B2rJlxqZnTV8xvieRZIOL0IlRmSoE",
    authDomain: "alter-7866f.firebaseapp.com",
    projectId: "alter-7866f",
    storageBucket: "alter-7866f.firebasestorage.app",
    messagingSenderId: "887730643442",
    appId: "1:887730643442:web:cc7cbfee7a5364f53b4b6b",
    measurementId: "G-5FWLKP5G8L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
