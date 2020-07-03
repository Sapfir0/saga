import React, {useState} from "react";
import {connect, useDispatch} from "react-redux";
import Button from "../Button/Button";



type MouseClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface IProps {
    onClick: MouseClick
    colors: string[]
}


export function Colors({onClick, colors} : IProps) {
    return <>
        <Button onClick={onClick} text="Получить все цвета"/>
        <ul>
            {colors.map(c=><li key={c.toString()}> {c} </li>)}
        </ul>
    </>
}

