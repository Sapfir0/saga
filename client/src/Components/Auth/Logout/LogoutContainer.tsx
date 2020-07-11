import React from "react";
import {connect, useDispatch} from "react-redux";
import LogoutAction from "./LogoutAction";
import {LoginReducer} from "../../../typings/common";
import {myContainer} from "../../../config/inversify.config";
import {TYPES} from "../../../services/typings/types";
import Logout from "./Logout";
import authAction from "../authAction";


interface IProps {
    auth: LoginReducer
}

function LogoutContainer(props: IProps) {
    const actions = myContainer.get<LogoutAction>(TYPES.LogoutAction)

    const dispatch = useDispatch()
    const onClick = () => dispatch(actions.loadLogout())

    return <Logout auth={props.auth.auth} onClick={onClick} />
}

export default connect(authAction)(LogoutContainer)