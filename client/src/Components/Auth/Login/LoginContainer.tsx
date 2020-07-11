import React from "react";
import {connect, useDispatch} from "react-redux";
import {LoginReducer} from "../../../typings/common";
import {TYPES} from "../../../services/typings/types";
import {myContainer} from "../../../config/inversify.config";
import LoginAction from "./LoginAction";
import Login from "./Login";
import authAction from "../authAction";


interface IProps {
    auth: LoginReducer
}

function LoginContainer(props: IProps) {
    const actions = myContainer.get<LoginAction>(TYPES.LoginAction)
    console.log(props)
    const dispatch = useDispatch()
    const onClick = () => dispatch(actions.loadLogin({username: "admin", password: "1234"}))

    return <Login auth={props.auth.auth} onClick={onClick} />
}


export default connect(authAction)(LoginContainer)