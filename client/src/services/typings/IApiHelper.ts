import {AxiosResponse} from "axios";


export interface IApiHelper {
    request: (promise: Promise<AxiosResponse>) => Promise<AxiosResponse> | null
    parseCode: (code: number) => string
}