import {LoginReducer} from "../../typings/common";

const authAction = (state: {authReducer: LoginReducer}) => {
    return {
        auth: state.authReducer
    }
}

export default authAction