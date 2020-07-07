import { combineReducers } from 'redux';
import {colorReducer} from "./reducers/colorReducer";
import {loginReducer} from "./reducers/loginReducer";


export default combineReducers({
    colorReducer: colorReducer,
    loginReducer: loginReducer,
});