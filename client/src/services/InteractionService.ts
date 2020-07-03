import axios from "axios";
import {serverUrl} from "../config/config";
import {query} from "./ApiHelper";
import {compose} from "redux";

interface IData {
    [name: string]: string | number | undefined;
}


export function get(url: string) {
    const composition = compose(query, axios.get)
    return composition(`${serverUrl}/${url}`)
}

export function post(url: string, data: IData) {
    return compose(query, axios.post)(`${serverUrl}/${url}`, data)
}
