import axios from "axios";
import {serverUrl} from "../config/config";
import {query} from "./ApiHelper";

interface IData {
    [name: string]: string | number | undefined;
}


export function get(url: string) {
    const promise = axios.get(`${serverUrl}/${url}`)
    return query(promise);
}

export function post(url: string, data: IData) {
    return axios.post(`${serverUrl}/${url}`, data)
}
