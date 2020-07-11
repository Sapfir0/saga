import {ActionTypePayload, ILogin, IStore} from "../../typings/common";
import {GET_LOGIN, GET_LOGOUT, GET_AUTH_ACTIONS} from "../../Store/actionsName";
import initialState from "../../Store/store";


const authReducer = (state: IStore = initialState, action: ActionTypePayload<ILogin, GET_AUTH_ACTIONS>) => {
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
        default: {
            return state
        }
    }
    //const exhaustiveCheck: never = action
}

export default authReducer
