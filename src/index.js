import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"

import 'bulma/css/bulma.css';
import './styles.scss';
import { carReducer } from "./reducer/carReducer";

import { createStore } from "redux";

//create store and connect it to the app 
//use createStore function to create our store

const store = createStore(carReducer)
console.log("this is store", store)


const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
