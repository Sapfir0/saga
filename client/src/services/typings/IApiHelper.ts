import {AxiosResponse} from "axios";


export interface IApiHelper {
    request: (promise: Promise<AxiosResponse>) => Promise<AxiosResponse>
    parseCode: (code: number) => string
}