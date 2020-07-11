import React, {ChangeEvent, useState} from "react";
import {connect, useDispatch} from "react-redux";
import Button from "../Button/Button";
import {IColor, MouseClickPure, MouseClickWithId} from "../../typings/common";


interface IProps {
    onClick: MouseClickWithId
    color: IColor
}


export default function Color({onClick, color} : IProps) {
    const [id, setId] = useState("")
    const onSubmit = (event: any) => {
        onClick(event, parseInt(id))
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value)
    }

    return <>
        <input onChange={handleChange} value={id} placeholder="Введите id цвета от 1 до 5"/>
        <Button onClick={onSubmit} text="Получить цвет"/>
        <br />
        {color}
    </>
}

