import React from "react";
import {LoginReducer} from "../../typings/common";


export default function Header(props: LoginReducer) {
    return <p> Вы {props.auth && props.auth.accessToken.length !== 0 ? props.auth?.role : "никто"} </p>
}
