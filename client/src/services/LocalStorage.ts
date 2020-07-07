import {injectable, inject} from "inversify";
import {ILocalStorage} from "./typings/ILocalStorage";


@injectable()
class LocalStorage implements ILocalStorage {

    get = (field: string) => {
        const databaseObject = localStorage.getItem(field)
        if (!!databaseObject) {
            return JSON.parse(databaseObject)
        }
    }

    remove = (field: string) => {
        localStorage.removeItem(field)
    }

    set = (field: string, data: any) => {
        localStorage.setItem(field, JSON.stringify(data))
    }
}

export default LocalStorage

