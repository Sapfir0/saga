import { combineReducers } from 'redux';
import {connectRouter} from "connected-react-router";
import {History} from "history";
import colorListReducer from "../Components/Color/colorListReducer";
import colorsListReducer from "../Components/Colors/colorsListReducer";
import authReducer from "../Components/Auth/authReducer";


const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    colorListReducer,
    colorsListReducer,
    authReducer
});

export default createRootReducer