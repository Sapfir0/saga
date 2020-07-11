import {ITokenService} from "./typings/ITokenService";
import {inject, injectable} from "inversify";
import {USER} from "../config/localstorageFields";
import LocalStorage from "./LocalStorage";
import {TYPES} from "./typings/types";
import {ILogin} from "../typings/common";

interface ITokenServiceLogin extends ILogin{
    distanceBeforeExpires: number
}

@injectable()
class TokenService implements ITokenService {
    private _ls: LocalStorage
    private _user?: ITokenServiceLogin

    constructor(
        @inject(TYPES.LocalStorage) ls: LocalStorage
    ) {
        this._ls = ls;
        this.setTokens(this._ls.get(USER))
    }

    private static getDiff(expiresAt: Date) {
        const currentDate = new Date().getTime() / 1000
        const expiredAt = expiresAt!.getTime() / 1000;
        const diff = expiredAt - currentDate
        //if (diff < 0) throw new Error(`Отрицательная разница currentData и expiredAt ${diff} : CD: ${currentDate}  EA: ${expiredAt}`)
        return diff // около 1800 пока
    }

    public setTokens = (user: ILogin) => {
        if (user) {
            this._user = user as ITokenServiceLogin
            this._user.expiresIn = new Date(this._user.expiresIn)
            this._user.distanceBeforeExpires = TokenService.getDiff(this._user.expiresIn) // это мы получаем то число, которое указано на сервере как jwtLife
            this._ls.set(USER, user)
        }
    }

    public isAuth = () => {
        return !!this._ls.get(USER)
    }

    public getTokens = () => {
        const user: ILogin = this._ls.get(USER) // можно привести типы и сделать проверку на deepEqual
        return user
    }

    public removeTokens = () => {
        this._user = undefined
        this._ls.remove(USER)
    }

    public needLongToken = () => {
        if(this._user) {
            console.log(TokenService.getDiff(this._user.expiresIn), this._user.distanceBeforeExpires / 2)
            return TokenService.getDiff(this._user.expiresIn) < this._user.distanceBeforeExpires / 2
        }
        return false
    }

}

export default TokenService