import {ClientRouteType} from "../../config/clientRoutes";


export interface IRedirection {
    redirect: (url: ClientRouteType) => void
}