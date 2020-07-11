import {statusCodes} from "./others/statusCodes";
import {IApiHelper, RouteInfo} from "./typings/IApiHelper";
import {AxiosError, AxiosResponse} from "axios";
import {injectable} from "inversify";
import ClientRoutes from "../config/clientRoutes";
import {DTO} from "../typings/common";
import {left, right} from "@sweet-monads/either";
import {NetworkError} from "./errors/NetworkError";


@injectable()
class ApiHelper implements IApiHelper {

    public request = async <T>(promise: Promise<AxiosResponse<T>>) => { // на самом деле, это должна быть генераторная функци но мне лень ее биндить ручками
        try {
            const data = await promise
            return right<NetworkError, AxiosResponse<T>>(data)
        }
        catch (e) {
            const error = {...e}
            const message = this.parseCode(error.status)
            return left<NetworkError, AxiosResponse<T>>(new NetworkError(message))
        }
    }

    public parseCode = (code: number) => {
        if (code in statusCodes) {
            return statusCodes[code]
        }
        else {
            return {message: "Undefined error with your request", redirectedUrl: ClientRoutes.NOT_FOUND}
        }
    }
}

export default ApiHelper

