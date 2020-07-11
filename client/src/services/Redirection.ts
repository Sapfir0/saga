import {IRedirection} from "./typings/IRedirection";
import {createBrowserHistory} from "history";
import {injectable} from "inversify";
import {ClientRouteType} from "../config/clientRoutes";

@injectable()
class Redirection implements IRedirection {
    public history = createBrowserHistory()  // должен быть private

    public redirect = (url: ClientRouteType) => {
        console.log("редиректим через историю")
        this.history.push(url.toString())
    }

}

export default Redirection