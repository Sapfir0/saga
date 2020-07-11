import {AxiosResponse} from "axios";
import {DTO, RawPromisableDTO} from "../../typings/common";
import {ClientRouteType} from "../../config/clientRoutes";
import {Either} from "@sweet-monads/either";
import {NetworkError} from "../errors/NetworkError";


export interface RouteInfo {
    message: string
    redirectedUrl: ClientRouteType
}

export interface IApiHelper {
    request: (promise: Promise<AxiosResponse>) => Promise<Either<NetworkError, any>>
    parseCode: (code: number) => RouteInfo
}