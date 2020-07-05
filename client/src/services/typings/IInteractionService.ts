export interface IData {
    [name: string]: string | number | undefined;
}


export interface IInteractionService {
    get: (url: string) => any
    post: (url: string, data: IData) => any
}