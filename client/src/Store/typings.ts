import React from "react";
import {DTO} from "../typings/common";

export interface IStore  {
    color: IColor
    colors: IColors
}

export type IColor = string
export type IColors = string[]

export type IPayload = {id: number}

export type NonNullable<T> = T extends null | undefined ? never : T

export interface ActionTypePayload<T> {
    type: string;
    payload: T;
}

export interface ActionTypePure<T> {
    type: string;
    payload?: T;
}

export type MouseClick = (event: IMouseEvent, id: number) => void;
export type IMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>