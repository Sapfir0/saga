import axios from "axios";
import {serverUrl} from "../config/config";
import {compose} from "redux";
import ApiHelper from "./ApiHelper";
import {IData, IInteractionService} from "./typings/IInteractionService";



class InteractionService implements IInteractionService {
    private api = new ApiHelper()

    public get = (url: string) => {
        const a = axios.get(`${serverUrl}/${url}`)
        return this.api.request(a)
    }

    public post = (url: string, data: IData) => {
        const a = axios.post(`${serverUrl}/${url}`, data)
        return this.api.request(a)
    }
}

export default InteractionService

