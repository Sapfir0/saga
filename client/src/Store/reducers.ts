import {PUT_DATA} from "./actions";

const initialState = {
    data: []
}

export const reducer = (state = initialState, action: any) => {
    if (action.type === PUT_DATA) {
        return {
            ...state,
            data: action.payload
        }
    }
    return state;
}