import {ActionType} from "../typings";
import {DTO} from "../../typings/common";


export interface IActions {
    getColor: (data: DTO) => ActionType
    getColors: (data: DTO) => ActionType
    loadColor: (id: number) => ActionType
    loadColors: () => ActionType
}

