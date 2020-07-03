import {GET_COLOR, GET_COLORS} from "./actions";
import {ActionType, IStore} from "./typings";



const initialState : IStore = {
    colors: [],
    color: ""
}

export const reducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case GET_COLORS:
            return {
                ...state,
                colors: action.payload
            }
        case GET_COLOR:
            return {
                ...state,
                color: action.payload
            }
        default:
            return state;
    }
}