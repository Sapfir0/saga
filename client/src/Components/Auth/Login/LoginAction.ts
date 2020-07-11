import {DTO, ILoginPayload} from "../../../typings/common";
import {injectable} from "inversify";
import {ILoginAction} from "../../../typings/IAction";
import {GET_LOGIN, LOAD_LOGIN} from "../../../Store/actionsName";



@injectable()
class LoginAction implements ILoginAction {
    public getLogin = (dataFromServer: DTO) => ({
        type: GET_LOGIN,
        payload: dataFromServer
    })

    public loadLogin = (userdata: ILoginPayload) => ({
        type: LOAD_LOGIN,
        payload: {
            ...userdata
        }
    })
}

export default LoginAction