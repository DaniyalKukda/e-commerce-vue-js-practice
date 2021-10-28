import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/functions';

const firebaseConfig = {
  apiKey: "AIzaSyB48f2Wtbx8WB7uOHdQJ8IR0QoyISJO3bw",
  authDomain: "vue-app-ecommerce.firebaseapp.com",
  projectId: "vue-app-ecommerce",
  storageBucket: "vue-app-ecommerce.appspot.com",
  messagingSenderId: "932247717624",
  appId: "1:932247717624:web:b65050b373b0d616ff9d0d",
  measurementId: "G-C6G9ZLRL28"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const functions = firebase.functions()
export {
  db,
  auth,
  storage,
  functions
}