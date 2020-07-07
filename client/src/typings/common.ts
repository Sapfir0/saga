import {ILogin} from "../Store/typings";

export type DTO = string[] | string

export interface LoginReducer {
    auth: ILogin
}

