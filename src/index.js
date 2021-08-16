import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as firebase from 'firebase'


// <script src="https://www.gstatic.com/firebasejs/4.1.2/firebase.js"></script>

  // Initialize Firebase
  var config = {
    // apiKey: "AIzaSyBbgpxWlk-f126ewt2LFXbuoqzzjBt8R58",
    // authDomain: "lab-assignment-6f910.firebaseapp.com",
    // databaseURL: "https://lab-assignment-6f910.firebaseio.com",
    // projectId: "lab-assignment-6f910",
    // storageBucket: "lab-assignment-6f910.appspot.com",
    // messagingSenderId: "575799995717"

    apiKey: "AIzaSyD_XmN_miu3POhjxjgx_n2RIJQIMz3C6bk",
    authDomain: "todoapp-60444.firebaseapp.com",
    databaseURL: "https://todoapp-60444.firebaseio.com",
    projectId: "todoapp-60444",
    storageBucket: "todoapp-60444.appspot.com",
    messagingSenderId: "190331403114",
    appId: "1:190331403114:web:eafb692a6c369f4da74313"
    
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
