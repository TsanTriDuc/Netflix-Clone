// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTLFyKpyoU2J1mYoiT9byh2t7sA6W6T0A",
  authDomain: "movie-management-39c77.firebaseapp.com",
  projectId: "movie-management-39c77",
  storageBucket: "movie-management-39c77.appspot.com",
  messagingSenderId: "1064148187652",
  appId: "1:1064148187652:web:6dcaf77af15d4753239351",
  measurementId: "G-3H4FHJPK9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };