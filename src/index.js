import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFzh-92H-G6oPgQ4cdAnfErg1KnL4dCwU",
  authDomain: "cart-c4b51.firebaseapp.com",
  projectId: "cart-c4b51",
  storageBucket: "cart-c4b51.appspot.com",
  messagingSenderId: "137396756100",
  appId: "1:137396756100:web:ffe525b353721d8112acd1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));


