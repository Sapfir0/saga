import {ActionTypePayload, IStore} from "../typings";
import initialState from "../store";
import {DTO} from "../../typings/common";
import {GET_LOGOUT, GET_LOGIN} from "../actionsName";


export const authReducer = (state: IStore = initialState, action: ActionTypePayload<DTO>) => {
    switch (action.type) {
        case GET_LOGIN:
            return {
                ...state,
                auth: action.payload
            } as unknown as IStore
        case GET_LOGOUT:
            return {
                ...state,
                auth: action.payload
            } as unknown  as IStore
        default:
            return state;
    }
}