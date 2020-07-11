import "reflect-metadata";

import {DTO} from "../../typings/common";
import {injectable} from "inversify";
import {IColorListAction} from "../../typings/IAction";
import {GET_COLOR, LOAD_COLOR} from "../../Store/actionsName";


@injectable()
class ColorListAction implements IColorListAction {

    public getColor = (dataFromServer: DTO) => ({
        type: GET_COLOR,
        payload: dataFromServer
    })

    public loadColor = (id: number) => ({
        type: LOAD_COLOR,
        payload: {
            id
        }
    })


}

export default ColorListAction