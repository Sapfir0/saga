import LocalStorage from "../services/LocalStorage";
import {TYPES} from "../services/typings/types";
import {USER} from "../config/localstorageFields";
import {IStore} from "../typings/common";
import {myContainer} from "../config/inversify.config";

const ls = myContainer.get<LocalStorage>(TYPES.LocalStorage)

const initialState : IStore = {
    colors: [],
    color: "",
    auth: ls.get(USER)
}

export default initialState