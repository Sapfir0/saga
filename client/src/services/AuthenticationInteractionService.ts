import {ServerRoutes} from "../config/serverRoutes";
import {AxiosResponse} from "axios";
import BaseInteractionService from "./BaseInteractionService";
import {IAuthenticationInteractionService} from "./typings/IAuthenticationInteractionService";
import {inject, injectable} from "inversify";
import {TYPES} from "./typings/types";
import TokenService from "./TokenService";
import {IData, ILogin} from "../typings/common";


@injectable()
class AuthenticationInteractionService implements IAuthenticationInteractionService {
    private _fetcher: BaseInteractionService
    private _token: TokenService

    constructor(
        @inject(TYPES.BaseInteractionService) fetcher: BaseInteractionService,
        @inject(TYPES.TokenService) token: TokenService
    ) {
        this._fetcher = fetcher
        this._token = token
    }

    public signIn = async (userdata: IData) => {
        const data = await this._fetcher.post<ILogin>(ServerRoutes.SIGN_IN_URL, userdata)
        this._token.setTokens(data)
        return data
    }

    public logout = async () => {
        const data = await this._fetcher.post<string>(ServerRoutes.LOGOUT_URL, {})
        this._token.removeTokens()
        return data
    }
}

export default AuthenticationInteractionService