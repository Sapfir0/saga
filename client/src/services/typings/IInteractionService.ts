import {DTO} from "../../typings/common";
import {AxiosResponse} from "axios";
import {IApiHelper, NeedToBeRedirected} from "./IApiHelper";

export interface IData {
    [name: string]: string | number | undefined;
}


export interface IInteractionService {
    get: (url: string) => RawPromisableDTO
    post: (url: string, data: IData) => RawPromisableDTO
}

export type RawPromisableDTO = Promise<AxiosResponse<DTO> | NeedToBeRedirected>