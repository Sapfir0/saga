import React from "react";
import {LoginReducer} from "../../typings/common";
import LoginContainer from "../Auth/Login/LoginContainer";
import LogoutContainer from "../Auth/Logout/LogoutContainer";



export default function Header(props: LoginReducer) {
    console.log(props)

    return <>
        <p>
        Вы {props.auth && props.auth.accessToken.length !== 0 ? props.auth?.role : "никто"}
    </p>
        <LoginContainer />
        <LogoutContainer />
        <p />
        </>
}
