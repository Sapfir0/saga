import {DTO, IData, RawPromisableDTO} from "../../typings/common";
import {NetworkError} from "../errors/NetworkError";
import {Either} from "@sweet-monads/either";
import {BaseInteractionError} from "../errors/BaseInteractionError";


export interface IBaseInteractionService {
    get: <T=any>(url: string) => Promise<Either<void, T>>
    post: <T=any>(url: string, data: IData) => Promise<Either<void, T>>
}

