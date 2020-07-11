import "reflect-metadata";
import {injectable} from "inversify";
import {GET_LOGOUT, LOAD_LOGOUT} from "../../../Store/actionsName";
import {ILogoutAction} from "../../../typings/IAction";



@injectable()
class LogoutAction implements ILogoutAction {
    public getLogout = () => ({ // а тут нет параметров, хотя это гет, хех
        type: GET_LOGOUT,
    })

    public loadLogout = () => ({
        type: LOAD_LOGOUT
    })
}

export default LogoutAction