import axios from "axios";
import {serverUrl} from "../config/config";
import {compose} from "redux";
import ApiHelper from "./ApiHelper";
import {IData, IInteractionService} from "./typings/IInteractionService";



class InteractionService implements IInteractionService {
    private api = new ApiHelper()

    public get = (url: string) => {
        const composition = compose(this.api.request, axios.get)
        return composition(`${serverUrl}/${url}`)
    }

    public post = (url: string, data: IData) => {
        const composition = compose(this.api.request, axios.post)
        return composition(`${serverUrl}/${url}`, data)
    }
}

export default InteractionService

