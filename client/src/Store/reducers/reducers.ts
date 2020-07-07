import {GET_COLOR, GET_COLORS} from "../actionsName";
import {ActionTypePayload, ActionTypePure, IPayload, IStore} from "../typings";
import {DTO} from "../../typings/common";

const initialState : IStore = {
    colors: [],
    color: ""
}

export const colorReducer = (state: IStore = initialState, action: ActionTypePayload<DTO>) => {
    switch (action.type) {
        case GET_COLORS:
            return {
                ...state,
                colors: action.payload
            } as IStore
        case GET_COLOR:
            return {
                ...state,
                color: action.payload
            }  as IStore
        default:
            return state;
    }
}