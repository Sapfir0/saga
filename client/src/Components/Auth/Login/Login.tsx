import React from "react";
import Button from "../../Button/Button";
import {ILogin, LoginReducer} from "../../../typings/common";

type MouseClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface IProps {
    onClick: MouseClick
    auth: ILogin
}

export default function Login(props: IProps) {
    return <>
        <Button onClick={props.onClick} text="Авторизоваться"/>
    </>
}