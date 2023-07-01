// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRUSZrPdVnYrO9Ay4tfS15judwzSvsFps",
  authDomain: "bookstay-63217.firebaseapp.com",
  projectId: "bookstay-63217",
  storageBucket: "bookstay-63217.appspot.com",
  messagingSenderId: "583946898967",
  appId: "1:583946898967:web:e3ca5e0467fcc9aead5652"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};
