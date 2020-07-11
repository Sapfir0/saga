import {AxiosResponse} from "axios";
import {RouteInfo} from "../services/typings/IApiHelper";
import React from "react";

export type DTO = string[] | string

export interface LoginReducer {
    auth: ILogin
}

export interface IData {
    [name: string]: string | number | undefined;
}

export type RawPromisableDTO = Promise<AxiosResponse<DTO> | RouteInfo>



export interface IStore  {
    color: IColor
    colors: IColors
    auth: ILogin
}

export interface ILogin {
    accessToken: string
    refreshToken: string,
    expiresIn: Date
    role: string // may be literal type
}

export type IColor = string
export type IColors = string[]

export type IColorPayload = {id: number}
export type ILoginPayload = {username: string, password: string, }


export interface ActionTypePayload<PayloadType, ActionType> {
    type: ActionType;
    payload: PayloadType;
}

export interface ActionTypePure<ActionType> {
    type: ActionType;
}

export type MouseClickWithId = (event: IMouseEvent, id: number) => void;
export type MouseClickPure = (event: IMouseEvent) => void;

export type IMouseEvent = React.MouseEvent<HTMLButtonElement, React.MouseEvent>

