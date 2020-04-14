import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import firebase from "firebase";

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

try {
    firebase.initializeApp(firebaseConfig);
} catch (error) {
    console.log(error.message);
}

const initial = {
    login: false,
    username: "(click here!)",
    email: "",
    data: [],
    items: [],
};

function fireReducer(state = intitial, action) {
    switch (action.type) {
        case "UPDATE_USER":
            return action.value;
        default:
            return state;
    }
}

export function initStore(state = initial) {
    return createStore(fireReducer, state, applyMiddleware(thunkMiddleware));
}
