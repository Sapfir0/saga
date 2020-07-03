import React, {useState} from "react";
import {connect, useDispatch} from "react-redux";
import Button from "../Button/Button";
import {IColor, MouseClick} from "../../Store/typings";


interface IProps {
    onClick: MouseClick
    color: IColor
}


export default function CurrentColor({onClick, color} : IProps) {
    const [id, setId] = useState()
    const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick(event, id)
    }

    return <>
        <input onChange={e => setId(e.target.value)} value={id} placeholder="Введите id цвета от 1 до 5"/>
        <Button onClick={onSubmit} text="Получить цвет"/>
        <br />
        {color}
    </>
}

