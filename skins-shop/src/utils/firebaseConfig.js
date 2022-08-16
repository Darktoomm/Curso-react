// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWv1X7Rgv6WFrkNFcEjxHBZxCRbRlYZuA",
  authDomain: "ecomm-skin-shop.firebaseapp.com",
  projectId: "ecomm-skin-shop",
  storageBucket: "ecomm-skin-shop.appspot.com",
  messagingSenderId: "84895085707",
  appId: "1:84895085707:web:b8a2771fa83915c6af908e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);