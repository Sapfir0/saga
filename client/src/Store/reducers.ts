import {PUT_DATA} from "./actions";

interface IStore extends IColor {

}

interface IColor {
    colors: string[] | string
}

interface ActionType {
    type: string;
    payload: any;
}

const initialState : IStore = {
    colors: []
}

export const reducer = (state = initialState, action: ActionType) => {
    if (action.type === PUT_DATA) {
        return {
            ...state,
            colors: action.payload
        }
    }
    return state;
}