import "reflect-metadata";

import {GET_COLOR, GET_COLORS, LOAD_COLOR, LOAD_COLORS, LOAD_LOGIN, LOAD_LOGOUT, GET_LOGIN, GET_LOGOUT} from "./actionsName";
import {IActions} from "./typings/IActions";
import {DTO} from "../typings/common";
import {injectable} from "inversify";
import {ILoginPayload} from "./typings";


@injectable()
class Actions implements IActions {
    public getColors = (dataFromServer: DTO) => ({
        type: GET_COLORS,
        payload: dataFromServer
    })

    public loadColors = () => ({
        type: LOAD_COLORS
    })

    public getColor = (dataFromServer: DTO) => ({
        type: GET_COLOR,
        payload: dataFromServer
    })

    public loadColor = (id: number) => ({
        type: LOAD_COLOR,
        payload: {
            id
        }
    })

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

    public getLogout = () => ({ // а тут нет параметров, хотя это гет, хех
        type: GET_LOGOUT,
    })

    public loadLogout = () => ({
        type: LOAD_LOGOUT
    })
}

export default Actions