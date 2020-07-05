import {statusCodes} from "./statusCodes";
import {IApiHelper} from "./typings/IApiHelper";


class ApiHelper implements IApiHelper<any> {

    request  = async(promise: Promise<any>) => { // на самом деле, это должна быть генераторная функци но мне лень ее биндить ручками
        const data = await promise
        const message = this.parseCode(data.status)
        console.log(message)
        return await data
    }

    parseCode = (code: number) => {
        if (code in statusCodes) {
            return statusCodes[code]
        }
        else {
            return "Undefined error with your request"
        }
    }
}

export default ApiHelper

