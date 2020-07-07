import {ActionTypePayload, ILogin, IStore} from "../typings";
import initialState from "../store";
import {GET_LOGOUT, GET_LOGIN} from "../actionsName";


export const authReducer = (state: IStore = initialState, action: ActionTypePayload<ILogin>) => {
    switch (action.type) {
        case GET_LOGIN:
            return {
                ...state,
                auth: action.payload
            } as IStore
        case GET_LOGOUT:
            return {
                ...state,
                auth: action.payload
            } as IStore
        default:
            return state;
    }
}