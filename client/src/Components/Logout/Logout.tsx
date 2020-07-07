import React from "react";
import Button from "../Button/Button";
import {IColors, ILogin} from "../../Store/typings";
import {LoginReducer} from "../../typings/common";

type MouseClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface IProps {
    onClick: MouseClick
    auth: ILogin
}

export default function Logout(props: IProps) {
    console.log(props)
    return <>
        <Button onClick={props.onClick} text="Выйти"/>
    </>
}