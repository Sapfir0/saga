import {DTO} from "../../typings/common";
import {AxiosResponse} from "axios";

export interface IData {
    [name: string]: string | number | undefined;
}


export interface IInteractionService {
    get: (url: string) => Promise<AxiosResponse<DTO>>
    post: (url: string, data: IData) => Promise<AxiosResponse<DTO>>
}