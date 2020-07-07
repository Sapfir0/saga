import "reflect-metadata";

import {GET_COLOR, GET_COLORS, LOAD_COLOR, LOAD_COLORS, LOGIN, LOGOUT} from "./actionsName";
import {IActions} from "./typings/IActions";
import {DTO} from "../typings/common";
import {injectable} from "inversify";


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
        type: LOGIN,
        payload: dataFromServer
    })

    public loadLogin = () => ({
        type: LOGIN
    })

    public getLogout = (dataFromServer: DTO) => ({
        type: LOGOUT,
        payload: dataFromServer
    })

    public loadLogout = () => ({
        type: LOGOUT
    })
}

export default Actions