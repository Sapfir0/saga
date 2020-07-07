import {statusCodes} from "./statusCodes";
import {IApiHelper} from "./typings/IApiHelper";
import {AxiosError, AxiosResponse} from "axios";
import {injectable} from "inversify";
import {signIn} from "../config/routes";


@injectable()
class ApiHelper implements IApiHelper {

    public request = async (promise: Promise<AxiosResponse>) => { // на самом деле, это должна быть генераторная функци но мне лень ее биндить ручками
        let statusCode: number = 0
        let data: AxiosResponse
        let isRequestCrashing: boolean = false

        try {
            data = await promise
        }
        catch (e) {
            const error = {...e}
            console.warn(error)
            data = error.response
            isRequestCrashing = error.isAxiosError
        }
        finally {
            statusCode = data!.status
            const message = this.parseCode(statusCode)
            console.log(message)
        }

        if (isRequestCrashing) {
            return {url: signIn}
        }

        return data

    }

    public parseCode = (code: number) => {
        if (code in statusCodes) {
            return statusCodes[code]
        }
        else {
            return "Undefined error with your request"
        }
    }
}

export default ApiHelper

