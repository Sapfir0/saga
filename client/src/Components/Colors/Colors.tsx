import React, {useState} from "react";
import {connect, useDispatch} from "react-redux";
import {loadData} from "../../Store/actions";
import Button from "../Button/Button";



type MouseClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface IProps {
    onClick: MouseClick
    // colors: string | string[]
}


export function Colors({onClick} : IProps) {
    return <>
        <Button onClick={onClick} text="Получить все цвета"/>
        {/*{colors}*/}
    </>
}

