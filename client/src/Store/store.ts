import {IStore} from "./typings";
import {myContainer} from "../typings/inversify.config";
import LocalStorage from "../services/LocalStorage";
import {TYPES} from "../services/typings/types";
import {USER} from "../config/localstorageFields";

const ls = myContainer.get<LocalStorage>(TYPES.LocalStorage)

const initialState : IStore = {
    colors: [],
    color: "",
    auth: ls.get(USER)
}

export default initialState