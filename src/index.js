import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import reducers from './redux/reducers';
import {existInLocal, getFromLocal} from "./config/Cache";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const authInitialState = {
    isLoading: false,
    isError: false,
    error: null,
    auth: null
};

export const checkAndRestoreFromLocal = () => {
    let userAuth = authInitialState;

    if (existInLocal("auth")) {
        userAuth = Object.assign({}, userAuth, getFromLocal("auth"));
    }
    return {
        userAuth,
    };
};

const store = createStore(
    reducers, checkAndRestoreFromLocal(), composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)