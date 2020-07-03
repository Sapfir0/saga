import React, {useState} from "react";
import {connect, useDispatch} from "react-redux";
import {loadData} from "../../Store/actions";
import Button from "../Button/Button";
import {IColor} from "../../Store/reducers";



type MouseClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface IProps {
    onClick: MouseClick
    // colors: string | string[]
}


export default function CurrentColor({onClick} : IProps) {

    return <>
        <input placeholder="Введите id цвета от 1 до 5"/>
        <Button onClick={onClick} text="Получить цвет"/>
    </>
}

