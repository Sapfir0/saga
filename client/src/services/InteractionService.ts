import axios from "axios";
import {serverUrl} from "../config/config";
import {compose} from "redux";
import ApiHelper from "./ApiHelper";

interface IData {
    [name: string]: string | number | undefined;
}

interface IInteractionService {
    get: (url: string) => any
    post: (url: string, data: IData) => any
}


class InteractionService implements IInteractionService {
    private api = new ApiHelper()

    get = (url: string) => {
        const composition = compose(this.api.request, axios.get)
        return composition(`${serverUrl}/${url}`)
    }

    post = (url: string, data: IData) => {
        const composition = compose(this.api.request, axios.post)
        return composition(`${serverUrl}/${url}`, data)
    }
}

export default InteractionService

