import React from "react";
import {connect, useDispatch} from "react-redux";
import {LoginReducer} from "../../typings/common";
import Header from "../../Components/Header/Header";


interface IProps {
    auth: LoginReducer

}

function HeaderContainer(props: IProps) {
    return <Header {...props.auth}  />
}

const headerAction = (state: {authReducer: LoginReducer}) => {
    return {
        auth: state.authReducer
    }
}


export default connect(headerAction)(HeaderContainer)