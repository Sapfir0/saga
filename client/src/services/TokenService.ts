import ApiHelper from "./ApiHelper";
import InteractionService from "./InteractionService";
import {ITokenService} from "./typings/ITokenService";
import {injectable} from "inversify";


@injectable()
class TokenService implements ITokenService {
    private _accessToken: string
    private _refreshToken: string

    constructor(jwt: string, rt: string) {
        this._accessToken = jwt
        this._refreshToken = rt
    }

    get accessToken(): string {
        return this._accessToken;
    }

    set accessToken(value: string) {
        this._accessToken = value;
    }

    get refreshToken(): string {
        return this._refreshToken;
    }

    set refreshToken(value: string) {
        this._refreshToken = value;
    }

    public longToken = () => {
        //this._server.post()
    }

}

export default TokenService