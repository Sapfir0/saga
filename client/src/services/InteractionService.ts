import axios from "axios";
import {serverUrl} from "../config/config";
import ApiHelper from "./ApiHelper";
import {IData, IInteractionService} from "./typings/IInteractionService";
import {inject, injectable} from "inversify";
import {TYPES} from "./typings/types";
import LocalStorage from "./LocalStorage";
import {USER} from "../config/localstorageFields";
import {ILogin} from "../Store/typings";
import hist from "./Redirection";


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
            headers: {
                'x-access-token': user?.accessToken  // если не имеем токена в сторедже, то мы не авторизованы и кидаем нул как хедер
            }
        }
    }

    public get = async (url: string) => {
        const user: ILogin = this._ls.get(USER)
        const req = axios.get(`${serverUrl}/${url}`, this.getHeadersWithToken(user))

        const parsedData = await this._api.request(req)
        console.log(parsedData)

        if ("url" in parsedData) {
            hist.push(parsedData.url)
            console.log("Мы должны были перейти на другую страницу епта")
        }

        return parsedData


    }

    public post = async (url: string, data: IData) => {
        const user: ILogin = this._ls.get(USER)
        console.log(user)

        const req = axios.post(`${serverUrl}/${url}`, data, this.getHeadersWithToken(user))
        const parsedData = await this._api.request(req)
        console.log(parsedData)
        return parsedData

    }
}

export default InteractionService

