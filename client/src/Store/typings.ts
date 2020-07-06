import React from "react";

export interface IStore  {
    color: IColor
    colors: IColors
}

export type IColor = string
export type IColors = string[]


export interface ActionType {
    type: string;
    payload?: any;
}

export type MouseClick = (event: IMouseEvent, id: number) => void;
export type IMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>