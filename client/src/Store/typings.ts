import React from "react";

export interface IStore extends IColor {

}

export interface IColor {
    colors: string[]
    color: string
}

export interface ActionType {
    type: string;
    payload: any;
}

export type MouseClick = (event: IMouseEvent, id: number) => void;
export type IMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>