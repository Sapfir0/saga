import React from 'react';
import {Provider} from "react-redux"
import Colors from "../Containers/ColorContainer";
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
