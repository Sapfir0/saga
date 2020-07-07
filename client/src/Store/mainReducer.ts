import { combineReducers } from 'redux';
import {colorReducer} from "./reducers/colorReducer";
import {authReducer} from "./reducers/authReducer";


export default combineReducers({
    colorReducer: colorReducer,
    authReducer: authReducer,
});