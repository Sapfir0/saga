import React from "react";
import {connect, useDispatch} from "react-redux";
import {LoginReducer} from "../../typings/common";
import {myContainer} from "../../typings/inversify.config";
import Actions from "../../Store/Actions";
import {TYPES} from "../../services/typings/types";
import LocalStorage from "../../services/LocalStorage";
import {USER} from "../../config/localstorageFields";
import Logout from "../../Components/Logout/Logout";


interface IProps {
    auth: LoginReducer
}

function LogoutContainer(props: IProps) {
    console.log(props)

    const actions = myContainer.get<Actions>(TYPES.Actions)
    const ls = myContainer.get<LocalStorage>(TYPES.LocalStorage)

    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(actions.loadLogout())
        ls.remove(USER)
    }

    return <Logout auth={props.auth.auth} onClick={onClick} />
}


const logoutAction = (state: {authReducer: LoginReducer}) => {
    return {
        auth: state.authReducer
    }
}

export default connect(logoutAction)(LogoutContainer)