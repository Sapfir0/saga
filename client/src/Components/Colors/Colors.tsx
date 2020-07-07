import React, {useState} from "react";
import {connect, useDispatch} from "react-redux";
import Button from "../Button/Button";
import {IColors} from "../../Store/typings";



type MouseClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface IProps  {
    onClick: MouseClick
    colors: IColors
}


export function Colors({onClick, colors} : IProps) {
    return <>
        <Button onClick={onClick} text="Получить все цвета"/>
        <ul>
            {colors && colors.map(c=><li key={c.toString()}> {c} </li>)}
        </ul>
    </>
}

