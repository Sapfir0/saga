export interface IApiHelper<T> {
    request: (promise: Promise<T>) => T
    parseCode: (code: number) => string
}