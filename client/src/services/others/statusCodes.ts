import ClientRoutes from "../../config/clientRoutes";
import {RouteInfo} from "../typings/IApiHelper";



export const statusCodes: Record<number, RouteInfo> = {
    400: {message: "Bad request",redirectedUrl: ClientRoutes.NOT_FOUND},
    403: {message: "Forbidden",redirectedUrl: ClientRoutes.FORBIDDEN},
    404: {message: "Not found", redirectedUrl: ClientRoutes.NOT_FOUND},
    500: {message: "Internal server error",redirectedUrl: ClientRoutes.NOT_FOUND},
    502: {message:  "Bad gateway", redirectedUrl: ClientRoutes.NOT_FOUND},
}

