const SIGN_IN_URL = "/signIn"
const LOGOUT_URL = "/logout"

const COLOR_URL = "/color"
const COLORS_URL = "/colors"

const INDEX_URL = "/"
const NOT_FOUND = "/notFound"

const FORBIDDEN = "/forbidden"

const ClientRoutes = {SIGN_IN_URL, LOGOUT_URL, COLORS_URL, COLOR_URL, INDEX_URL, NOT_FOUND, FORBIDDEN} as const

export type ClientRouteType = typeof ClientRoutes[keyof typeof ClientRoutes]


export default ClientRoutes