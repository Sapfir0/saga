
export const LOAD_COLORS = 'LOAD_COLORS' as const
export const GET_COLORS = 'GET_COLORS' as const

export const GET_COLOR = 'GET_COLOR' as const
export const LOAD_COLOR = 'LOAD_COLOR' as const

export const LOAD_LOGIN = "LOAD_LOGIN" as const
export const GET_LOGIN = "GET_LOGIN" as const

export const LOAD_LOGOUT = "LOAD_LOGOUT" as const
export const GET_LOGOUT = "GET_LOGOUT" as const



const authActions = {GET_LOGOUT, GET_LOGIN} as const
const authLoadActions = {LOAD_LOGIN, LOAD_LOGOUT} as const
export type GET_AUTH_ACTIONS = typeof authActions[keyof typeof authActions]
export type LOAD_AUTH_ACTIONS = typeof authLoadActions[keyof typeof authLoadActions]


export type LOAD_COLOR_ACTION = typeof LOAD_COLOR
export type GET_COLOR_ACTION = typeof GET_COLOR

export type GET_COLORS_ACTION = typeof GET_COLORS
export type LOAD_COLORS_ACTION = typeof LOAD_COLORS

