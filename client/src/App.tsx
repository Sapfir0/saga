import React from 'react';
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux";
import './App.css';
import logger from "redux-logger"
import {serverUrl} from "./config/config";
import Colors from "./Components/Colors/Colors";
import {reducer} from "./Store/reducers";
import createSagaMiddleware from "redux-saga"
import {watchLoadData} from "./Store/sagas";


function App() {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))
    sagaMiddleware.run(watchLoadData)

    return (
        <Provider store={store}>
            <Colors />
        </Provider>)

}

export default App;
