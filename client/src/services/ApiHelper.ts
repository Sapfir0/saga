import {statusCodes} from "./statusCodes";

interface IApiHelper<T> {
    request: (promise: Promise<T>) => T
    parseCode: (code: number) => string
}


class ApiHelper implements IApiHelper<any> {

    request  = async(promise: Promise<any>) => {
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

