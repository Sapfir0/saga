import React from 'react';
import {Provider} from "react-redux"
import {store} from "../Store";
import Colors from "../Containers/ColorGetter/ColorContainer";
import CurrentColor from "../Containers/ColorGetter/CurrentColorContainer"
import Login from "../Containers/Auth/LoginContainer";
import LogoutContainer from "../Containers/Auth/LogoutContainer";
import HeaderContainer from "../Containers/Auth/HeaderContainer";

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
