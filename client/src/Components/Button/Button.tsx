import React from "react";


type MouseClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface IProps {
    onClick: MouseClick
    text: string
}

export default function Button({onClick, text}: IProps) {
    return <button onClick={onClick}> {text} </button>
}