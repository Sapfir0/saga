import React from 'react';
import {Provider} from "react-redux"
import Colors from "../Containers/ColorContainer";
import {store} from "../Store";
import CurrentColor from "../Containers/CurrentColorContainer"
import Login from "../Containers/LoginContainer";

function App() {
    return (
        <Provider store={store}>
            <Login />
            <Colors />
            <CurrentColor />
        </Provider>)

}

export default App;
