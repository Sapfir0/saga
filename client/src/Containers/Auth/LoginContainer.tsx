import React from "react";
import {connect, useDispatch} from "react-redux";
import {LoginReducer} from "../../typings/common";
import {myContainer} from "../../typings/inversify.config";
import Actions from "../../Store/Actions";
import {TYPES} from "../../services/typings/types";
import LocalStorage from "../../services/LocalStorage";
import {USER} from "../../config/localstorageFields";
import Login from "../../Components/Login/Login";

interface IProps {
    auth: LoginReducer
}

function LoginContainer(props: IProps) {
    console.log(props)

    const actions = myContainer.get<Actions>(TYPES.Actions)
    const ls = myContainer.get<LocalStorage>(TYPES.LocalStorage)

    const dispatch = useDispatch()
    const onClick = () => dispatch(actions.loadLogin({username: "admin", password: "1234"}))

    if (props.auth.auth && props.auth.auth.accessToken.length !== 0) {
        ls.set(USER, props.auth.auth) // если пользователь залогировался
    }

    return <Login auth={props.auth.auth} onClick={onClick} />
}


const loginAction = (state: {authReducer: LoginReducer}) => {
    return {
        auth: state.authReducer
    }
}

export default connect(loginAction)(LoginContainer)