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

interface IProps {
    auth: LoginReducer
}

function LoginContainer(props: IProps) {
    console.log(props)

    const actions = myContainer.get<Actions>(TYPES.Actions)
    const ls = myContainer.get<LocalStorage>(TYPES.LocalStorage)

    const dispatch = useDispatch()
    const onClick = () => dispatch(actions.loadLogin({username: "admin", password: "1234"}))

    console.log(props.auth.auth, "то оно")
    if (props.auth.auth && props.auth.auth.accessToken.length !== 0) {
        ls.set(USER, props.auth.auth) // если пользователь залогировался
    }

    return <Login auth={props.auth.auth} onClick={onClick} />
}


const loginAction = (state: {loginReducer: LoginReducer}) => {
    return {
        auth: state.loginReducer
    }
}

export default connect(loginAction)(LoginContainer)