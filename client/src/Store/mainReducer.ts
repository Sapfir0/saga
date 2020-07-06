import { combineReducers } from 'redux';
import {colorReducer} from "./reducers/reducers";


export default combineReducers({
    colorReducer: colorReducer,
});