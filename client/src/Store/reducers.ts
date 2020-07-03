import {GET_COLOR, GET_COLORS} from "./actions";

interface IStore extends IColor {

}

export interface IColor {
    colors: string[]
    color: string
}

interface ActionType {
    type: string;
    payload: any;
}

const initialState : IStore = {
    colors: [],
    color: ""
}

export const reducer = (state = initialState, action: ActionType) => {
    if (action.type === GET_COLORS) {
        return {
            ...state,
            colors: action.payload
        }
    }
    else if(action.type === GET_COLOR) {
        return {
            ...state,
            color: action.payload
        }
    }
    return state;
}