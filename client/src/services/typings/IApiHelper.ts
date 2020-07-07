import {AxiosResponse} from "axios";
import {routeType} from "../../config/routes";

export type NeedToBeRedirected = {
    url: string
}

export interface IApiHelper {
    request: (promise: Promise<AxiosResponse>) => Promise<AxiosResponse | NeedToBeRedirected>
    parseCode: (code: number) => string
}