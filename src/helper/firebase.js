// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsPKgwHiXfXfFKweh3yYvi1FcF7H4h33s",
  authDomain: "arthub-ver-1.firebaseapp.com",
  projectId: "arthub-ver-1",
  storageBucket: "arthub-ver-1.appspot.com",
  messagingSenderId: "276050764750",
  appId: "1:276050764750:web:fc86c4e56082f5efc9419f",
  measurementId: "G-0TL50X1FGD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
