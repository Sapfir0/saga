import initialState from "../../Store/store";
import {ActionTypePayload, DTO, IStore} from "../../typings/common";
import {GET_COLORS_ACTION, GET_COLOR, GET_COLORS} from "../../Store/actionsName";


export const colorsListReducer = (state: IStore = initialState, action: ActionTypePayload<DTO, GET_COLORS_ACTION>) => {
    switch (action.type) {
        case GET_COLORS:
            return {
                ...state,
                colors: action.payload
            } as IStore
        default:
            return state;
    }
}

export default colorsListReducer