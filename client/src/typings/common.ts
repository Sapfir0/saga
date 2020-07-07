export type DTO = string[] | string

export interface LoginReducer {
    accessToken: string
    refreshToken: string,
    expiresIn: number
    role: string // may be literal type

}