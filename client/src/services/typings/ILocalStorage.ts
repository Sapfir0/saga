export interface ILocalStorage {
    get: (field: string) => Object
    set: (field: string, data: any) => void
    remove: (field: string) => void
}