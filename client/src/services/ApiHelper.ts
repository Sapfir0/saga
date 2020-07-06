import {statusCodes} from "./statusCodes";
import {IApiHelper} from "./typings/IApiHelper";
import {AxiosResponse} from "axios";
import {injectable} from "inversify";


@injectable()
class ApiHelper implements IApiHelper {

    public request  = async (promise: Promise<AxiosResponse>) => { // на самом деле, это должна быть генераторная функци но мне лень ее биндить ручками
        const data = await promise
        const message = this.parseCode(data.status)
        console.log(message)
        return data;
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

