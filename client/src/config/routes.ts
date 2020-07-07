export const SIGN_IN_URL = "signIn"
export const LOGOUT_URL = "logout"

const ROUTES = [SIGN_IN_URL, LOGOUT_URL] as const
export type routeType = typeof ROUTES[number]

export default ROUTES