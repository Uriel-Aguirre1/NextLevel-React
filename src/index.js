import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyB8-Hz_HzrEp8c-C18fjSraF79c6058cQo",
  authDomain: "nextlevel-2b433.firebaseapp.com",
  projectId: "nextlevel-2b433",
  storageBucket: "nextlevel-2b433.appspot.com",
  messagingSenderId: "671646554400",
  appId: "1:671646554400:web:198fa716dfb9627564df45"
};


initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

