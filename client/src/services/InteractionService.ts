import axios, {AxiosRequestConfig} from "axios";
import {serverUrl} from "../config/config";
import ApiHelper from "./ApiHelper";
import {IData, IInteractionService} from "./typings/IInteractionService";
import {inject, injectable} from "inversify";
import {TYPES} from "./typings/types";
import LocalStorage from "./LocalStorage";
import {USER} from "../config/localstorageFields";
import {ILogin} from "../Store/typings";
import hist from "./Redirection";
import Redirection from "./Redirection";
import {routeType} from "../config/routes";


@injectable()
class InteractionService implements IInteractionService {
    private _api: ApiHelper
    private _ls: LocalStorage

    constructor(
        @inject(TYPES.ApiHelper)  _api: ApiHelper,
        @inject(TYPES.LocalStorage) _ls: LocalStorage
    ) {
        this._api = _api
        this._ls = _ls
    }

    private getHeadersWithToken = (user: ILogin) => {
        return {
            'x-access-token': user?.accessToken  // если не имеем токена в сторедже, то мы не авторизованы и кидаем нул как хедер
        }
    }

    private query = async (config: AxiosRequestConfig) => {
        const user: ILogin = this._ls.get(USER)
        const req = axios.request({...config, headers: this.getHeadersWithToken(user)})
        const parsedData = await this._api.request(req)
        console.log(parsedData)

        if ("url" in parsedData) {
            Redirection.redirect(parsedData.url as routeType)
        }

        return parsedData
    }

    public get = async (url: string) => {
        return this.query({method: "get", url: `${serverUrl}/${url}`})
    }

    public post = async (url: string, data: IData) => {
        return this.query({method: "post", url: `${serverUrl}/${url}`, data: data})
    }
}

export default InteractionService

