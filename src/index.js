import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCFzh-92H-G6oPgQ4cdAnfErg1KnL4dCwU",
    authDomain: "cart-c4b51.firebaseapp.com",
    projectId: "cart-c4b51",
    storageBucket: "cart-c4b51.appspot.com",
    messagingSenderId: "137396756100",
    appId: "1:137396756100:web:ffe525b353721d8112acd1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));


