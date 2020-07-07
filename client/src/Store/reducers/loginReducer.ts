import {ActionTypePayload, IStore} from "../typings";
import initialState from "../store";
import {DTO} from "../../typings/common";
import {GET_COLOR, GET_COLORS, LOGIN, LOGOUT} from "../actionsName";


export const loginReducer = (state: IStore = initialState, action: ActionTypePayload<DTO>) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                auth: action.payload
            } as IStore
        case LOGOUT:
            return {
                ...state,
                auth: action.payload
            }  as IStore
        default:
            return state;
    }
}