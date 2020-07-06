

export interface IApiHelper<T> {
    request: (promise: Promise<T>) => Promise<T>
    parseCode: (code: number) => string
}