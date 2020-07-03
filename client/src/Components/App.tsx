import React from 'react';
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux";
import './App.css';
import logger from "redux-logger"
import Colors from "../Containers/ColorContainer";
import {reducer} from "../Store/reducers";
import createSagaMiddleware from "redux-saga"
import {watchLoadData} from "../Store/sagas";
import {store} from "../Store";
import CurrentColor from "../Containers/CurrentColorContainer"

function App() {
    return (
        <Provider store={store}>
            <Colors />
            <CurrentColor />
        </Provider>)

}

export default App;
