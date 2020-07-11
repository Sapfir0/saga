import {USER} from "../../config/localstorageFields";
import {ILogin} from "../../typings/common";

export interface ITokenService {
    setTokens: (user: ILogin) =>  void
    getTokens: () => ILogin | Object
    removeTokens: () => void
    needLongToken: () => boolean

}