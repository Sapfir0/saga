import {AxiosResponse} from "axios";

export type NeedToBeRedirected = {
    url: string
}

export interface IApiHelper {
    request: (promise: Promise<AxiosResponse>) => Promise<AxiosResponse | NeedToBeRedirected>
    parseCode: (code: number) => string
}