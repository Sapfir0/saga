import axios from "axios"
import {serverUrl} from "../config/config";
import {compose} from "redux";

export const GET_COLORS = 'GET_COLORS'
export const GET_COLOR = "GET_COLOR"
export const LOAD_DATA = 'LOAD_DATA'

export const getColors = (dataFromServer: any) => {
    return {
        type: GET_COLORS,
        payload: dataFromServer
    }
}

export const getColor = (dataFromServer: any) => {
    return {
        type: GET_COLOR,
        payload: dataFromServer
    }
}

export const loadData = () => {
    return {
        type: LOAD_DATA
    }
}

