import * as firebase from 'firebase/app';
import "firebase/database";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBu0gsaOjGv4pxfPjW3CXhAKKbpgGVUQdo",
    authDomain: "react-todo-89a78.firebaseapp.com",
    databaseURL: "https://react-todo-89a78.firebaseio.com",
    projectId: "react-todo-89a78",
    storageBucket: "react-todo-89a78.appspot.com",
    messagingSenderId: "884752420317",
    appId: "1:884752420317:web:ae9936ed1372e76f277a34",
    measurementId: "G-20SJQP7NL9"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);