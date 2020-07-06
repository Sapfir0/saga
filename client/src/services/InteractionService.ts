import axios, {AxiosResponse} from "axios";
import {serverUrl} from "../config/config";
import {compose} from "redux";
import ApiHelper from "./ApiHelper";
import {IData, IInteractionService, RawPromisableDTO} from "./typings/IInteractionService";
import {injectable, inject} from "inversify";
import {DTO} from "../typings/common";
import {TYPES} from "./typings/types";


@injectable()
class InteractionService implements IInteractionService {
    private _api: ApiHelper

    constructor(
        @inject(TYPES.ApiHelper)  _api: ApiHelper
    ) {
        this._api = _api
    }

    public get = (url: string) => {
        const composition = compose(
            this._api.request,
            axios.get
        )
        return composition(`${serverUrl}/${url}`) as RawPromisableDTO
    }

    public post = (url: string, data: IData) => {
        const composition = compose(
            this._api.request,
            axios.post
        )
        return composition(`${serverUrl}/${url}`, data) as RawPromisableDTO
    }
}

export default InteractionService

