import React from "react";
import {connect, useDispatch} from "react-redux";
import Actions from "../Store/Actions";
import {Colors} from "../Components/Colors/Colors";
import {IColor, IColors} from "../Store/typings";
import {myContainer} from "../typings/inversify.config";
import {TYPES} from "../services/typings/types";
import Login from "../Components/Login/Login";

interface IProps  {
}

function LoginContainer(props: IProps) {
    console.log(props)

    const actions = myContainer.get<Actions>(TYPES.Actions)

    const dispatch = useDispatch()
    const onClick = () => dispatch(actions.loadLogin({username: "admin", password: "1234"}))

    return <Login onClick={onClick} />
}


const loginAction = (state: {colorReducer: {colors: IColors}}) => {
    return {
        colors: state.colorReducer.colors
    }
}

export default connect(loginAction)(LoginContainer)