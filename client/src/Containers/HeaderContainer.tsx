import React from "react";
import {connect, useDispatch} from "react-redux";
import Actions from "../Store/Actions";
import {Colors} from "../Components/Colors/Colors";
import {IColor, IColors} from "../Store/typings";
import {myContainer} from "../typings/inversify.config";
import {TYPES} from "../services/typings/types";
import Login from "../Components/Login/Login";
import {LoginReducer} from "../typings/common";
import LocalStorage from "../services/LocalStorage";
import {USER} from "../config/localstorageFields";
import Logout from "../Components/Logout/Logout";
import Header from "../Components/Header/Header";

interface IProps {
    auth: LoginReducer
}

function HeaderContainer(props: IProps) {
    console.log(props)
    return <Header auth={props.auth.auth}  />
}


const logoutAction = (state: {authReducer: LoginReducer}) => {
    return {
        auth: state.authReducer
    }
}

export default connect(logoutAction)(HeaderContainer)