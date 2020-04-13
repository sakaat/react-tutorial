import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import Sampledata from "./fire/Sampledata";

const firebaseConfig = {
    apiKey: "AIzaSyBqJBX8pZzyJgGnWxm_KBOjc7_M6JsRjY8",
    authDomain: "react-tutorial-f2f2d.firebaseapp.com",
    databaseURL: "https://react-tutorial-f2f2d.firebaseio.com",
    projectId: "react-tutorial-f2f2d",
    storageBucket: "react-tutorial-f2f2d.appspot.com",
    messagingSenderId: "147929545398",
    appId: "1:147929545398:web:acb813afa2a474e69ec417",
    measurementId: "G-0DXZQY2GYR",
};

firebase.initializeApp(firebaseConfig);

class App extends Component {
    render() {
        return (
            <div>
                <h1>Fire</h1>
                <h2>Sample data.</h2>
                <Sampledata />
            </div>
        );
    }
}

export default App;
