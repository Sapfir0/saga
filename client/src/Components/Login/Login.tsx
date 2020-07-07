import React from "react";
import Button from "../Button/Button";
import {IColors} from "../../Store/typings";
import {LoginReducer} from "../../typings/common";

type MouseClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface IProps {
    onClick: MouseClick
    auth: LoginReducer
}

export default function Login(props: IProps) {
    console.log(props)
    return <>
        <p /> Вы {props.auth?.role}
        <p /> Ваш jwt токен: {props.auth?.accessToken}
        <p />
        <Button onClick={props.onClick} text="Авторизоваться"/>
    </>
}