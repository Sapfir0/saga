import React from 'react';
import {Provider} from "react-redux"
import Colors from "../Containers/ColorContainer";
import {store} from "../Store";
import CurrentColor from "../Containers/CurrentColorContainer"
import Login from "../Containers/LoginContainer";
import LogoutContainer from "../Containers/LogoutContainer";
import HeaderContainer from "../Containers/HeaderContainer";

function App() {
    return (
        <Provider store={store}>
            <HeaderContainer/>
            <Login />
            <LogoutContainer />
            <p />
            <Colors />
            <CurrentColor />
        </Provider>)

}

export default App;
