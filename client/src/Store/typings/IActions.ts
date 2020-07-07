import {ActionTypePayload, ActionTypePure, IColorPayload} from "../typings";
import {DTO} from "../../typings/common";


export interface IActions {
    getColor: (data: DTO) => ActionTypePure<DTO>
    getColors: (data: DTO) =>  ActionTypePure<DTO>
    loadColor: (id: number) =>  ActionTypePayload<IColorPayload>
    loadColors: () => ActionTypePure<DTO>
}

