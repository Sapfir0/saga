import {DTO} from "../../typings/common";

export interface IData {
    [name: string]: string | number | undefined;
}


export interface IInteractionService {
    get: (url: string) => DTO
    post: (url: string, data: IData) => DTO
}