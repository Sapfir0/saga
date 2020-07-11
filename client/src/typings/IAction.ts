import {ActionTypePayload, ActionTypePure, DTO, IColorPayload, ILoginPayload} from "./common";
import {
    GET_AUTH_ACTIONS,
    GET_COLOR_ACTION,
    GET_COLORS_ACTION, LOAD_AUTH_ACTIONS,
    LOAD_COLOR_ACTION,
    LOAD_COLORS_ACTION
} from "../Store/actionsName";


export interface IColorListAction {
    getColor: (data: DTO) => ActionTypePure<GET_COLOR_ACTION>
    loadColor: (id: number) =>  ActionTypePayload<IColorPayload, LOAD_COLOR_ACTION>
}

export interface IColorsListAction {
    loadColors: () => ActionTypePure<LOAD_COLORS_ACTION>
    getColors: (data: DTO) =>  ActionTypePayload<DTO, GET_COLORS_ACTION>

}

export interface ILogoutAction {
    getLogout: () => ActionTypePure<GET_AUTH_ACTIONS>
    loadLogout: () => ActionTypePure<LOAD_AUTH_ACTIONS>
}

export interface ILoginAction {
    getLogin: (dataFromServer: DTO) => ActionTypePayload<DTO, GET_AUTH_ACTIONS>
    loadLogin:  (userdata: ILoginPayload) => ActionTypePayload<ILoginPayload, LOAD_AUTH_ACTIONS>
}

