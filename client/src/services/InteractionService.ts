import axios, {AxiosResponse} from "axios";
import {serverUrl} from "../config/config";
import {compose} from "redux";
import ApiHelper from "./ApiHelper";
import {IData, IInteractionService, RawPromisableDTO} from "./typings/IInteractionService";
import {injectable, inject} from "inversify";
import {TYPES} from "./typings/types";
import EventEmitter from "events";


@injectable()
class InteractionService implements IInteractionService {
    private _api: ApiHelper
    emitter = new EventEmitter(); //TODO DI fix

    constructor(
        @inject(TYPES.ApiHelper)  _api: ApiHelper
    ) {
        this._api = _api
    }

    public get = (url: string) => {
        const user = JSON.parse(<string>localStorage.getItem('user'))

        const composition = compose(
            this._api.request,
            axios.get
        )
        return composition(`${serverUrl}/${url}`, {
            headers: {
                'x-access-token': user.accessToken
            }
        }) as RawPromisableDTO
    }

    public post = (url: string, data: IData) => {
        const user = JSON.parse(<string>localStorage.getItem('user'))
        console.log(user)
        const req = axios.post(`${serverUrl}/${url}`, data, {
            headers: {
                'x-access-token': user.accessToken
            }
        })
        const parsedData = this._api.request(req)
        console.log(parsedData)
        return parsedData
        // try {
        //
        // }
        // catch (e) {
        //     window.location.href = "/"
        //     throw new Error("J")
        // }

    }
}

export default InteractionService

