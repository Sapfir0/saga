import {IData, ILogin, RawPromisableDTO} from "../../typings/common";


export interface IAuthenticationInteractionService {
    signIn: (data: IData) => Promise<ILogin>
    logout: () => Promise<string>
}
