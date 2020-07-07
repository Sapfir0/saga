import {IRedirection} from "./typings/IRedirection";
import {createBrowserHistory} from "history";
import ROUTES, {routeType} from "../config/routes";

const hist = createBrowserHistory()

class Redirection implements IRedirection {
    public static redirect = (url: routeType) => {
        hist.push(url.toString())
    }

}

export default Redirection