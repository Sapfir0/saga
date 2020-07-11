import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {serverUrl} from "../config/config";
import ApiHelper from "./ApiHelper";
import {IBaseInteractionService} from "./typings/IBaseInteractionService";
import {inject, injectable} from "inversify";
import {TYPES} from "./typings/types";
import Redirection from "./Redirection";
import {ServerRoutes} from "../config/serverRoutes"
import TokenService from "./TokenService";
import {IData, ILogin} from "../typings/common";
import {NetworkError} from "./errors/NetworkError";


@injectable()
class BaseInteractionService implements IBaseInteractionService {
    private _api: ApiHelper
    private _token: TokenService
    private _redirection: Redirection

    constructor(
        @inject(TYPES.ApiHelper)  api: ApiHelper,
        @inject(TYPES.TokenService) token: TokenService,
        @inject(TYPES.Redirection) redirection: Redirection
    ) {
        this._api = api
        this._token = token
        this._redirection = redirection
    }

    private getHeadersWithToken = (token?: string) => {
        return {
            'x-access-token': token // если не имеем токена в сторедже, то мы не авторизованы и кидаем нул как хедер
        }
    }

    private query = async <T>(config: AxiosRequestConfig) => {
        let user = this._token.getTokens()
        const isUpdatable = this._token.needLongToken()

        if (isUpdatable) {
            const newTokens = await axios.post<ILogin>(
                `${serverUrl}${ServerRoutes.LONG_TOKEN}`,
                {},
                {headers: this.getHeadersWithToken(user.refreshToken)})
            this._token.setTokens(newTokens.data)
            user = this._token.getTokens()
        }

        const req = axios.request<T>({...config, headers: this.getHeadersWithToken(user?.accessToken)})
        const response = await this._api.request<T>(req)

        const noError = response
            .mapLeft((e: NetworkError) => this._redirection.redirect(e.routeInfo.redirectedUrl))
            .mapRight((res: AxiosResponse<T>) => res.data)

        return noError.value as T
    }

    public get = async <T=any>(url: string, config?: AxiosRequestConfig) => {
        return await this.query<T>({method: "get", url: `${serverUrl}${url}`, ...config})
    }

    public post = async <T=any>(url: string, data: IData, config?: AxiosRequestConfig) => {
        return await this.query<T>({method: "post", url: `${serverUrl}${url}`, data: data, ...config})
    }


}

export default BaseInteractionService

