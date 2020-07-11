import initialState from "../../Store/store";
import {ActionTypePayload, DTO, IStore} from "../../typings/common";
import {GET_COLOR_ACTION, GET_COLOR, GET_COLORS} from "../../Store/actionsName";

const colorListReducer = (state: IStore = initialState, action: ActionTypePayload<DTO, GET_COLOR_ACTION>) => {
    switch (action.type) {
        case GET_COLOR:
            return {
                ...state,
                color: action.payload
            }  as IStore
        default:
            return state;
    }
}

export default colorListReducer