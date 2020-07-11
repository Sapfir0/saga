import {RouteInfo} from "../typings/IApiHelper";

export class NetworkError extends Error {
  routeInfo: RouteInfo

  constructor(routeInfo: RouteInfo) {
    super();
    this.name = "NetworkError"
    this.routeInfo = routeInfo
  }}
