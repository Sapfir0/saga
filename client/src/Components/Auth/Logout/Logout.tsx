import React from "react";
import {ILogin} from "../../../typings/common";
import Button from "../../Button/Button";


type MouseClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface IProps {
    onClick: MouseClick
    auth: ILogin
}

export default function Logout(props: IProps) {
    return <>
        <Button onClick={props.onClick} text="Выйти"/>
    </>
}