import axios from "axios"
import {serverUrl} from "../config/config";
import {compose} from "redux";

export const PUT_DATA = 'PUT_DATA'
export const LOAD_DATA = 'LOAD_DATA'

export const putData = (dataFromServer: any) => {
    return {
        type: PUT_DATA,
        payload: dataFromServer
    }
}

export const loadData = () => {
    return {
        type: LOAD_DATA
    }

}

