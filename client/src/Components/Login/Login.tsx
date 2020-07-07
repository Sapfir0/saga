import React from "react";
import Button from "../Button/Button";
import {IColors, ILogin} from "../../Store/typings";
import {LoginReducer} from "../../typings/common";

type MouseClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface IProps {
    onClick: MouseClick
    auth: ILogin
}

export default function Login(props: IProps) {
    console.log(props)
    return <>
        <p /> Вы {props.auth.accessToken.length !== 0 ? props.auth?.role : "никто"}

        <Button onClick={props.onClick} text="Авторизоваться"/>
    </>
}