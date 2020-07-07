import React from "react";
import Button from "../Button/Button";
import {IColors} from "../../Store/typings";

type MouseClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface IProps  {
    onClick: MouseClick

}

export default function Login({onClick}: IProps) {


    return <Button onClick={onClick} text="Авторизоваться" />
}