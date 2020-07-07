import {statusCodes} from "./statusCodes";
import {IApiHelper} from "./typings/IApiHelper";
import {AxiosError, AxiosResponse} from "axios";
import {injectable} from "inversify";


@injectable()
class ApiHelper implements IApiHelper {

    public request  = async (promise: Promise<AxiosResponse>) => { // на самом деле, это должна быть генераторная функци но мне лень ее биндить ручками
        let statusCode: number = 0
        let data: AxiosResponse

        try {
            data = await promise
        }
        catch (e) {
            const error = {...e}
            data = error.response
        }
        finally {
            // @ts-ignore
            console.log(data)
            // @ts-ignore
            statusCode = data.status
            const message = this.parseCode(statusCode)
            console.log(message)
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

