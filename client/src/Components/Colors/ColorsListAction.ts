import "reflect-metadata";

import {DTO} from "../../typings/common";
import {injectable} from "inversify";
import {GET_COLORS, LOAD_COLORS} from "../../Store/actionsName";
import {IColorsListAction} from "../../typings/IAction";


@injectable()
class ColorsListAction implements IColorsListAction {

    public getColors = (dataFromServer: DTO) => ({
        type: GET_COLORS,
        payload: dataFromServer
    })

    public loadColors = () => ({
        type: LOAD_COLORS
    })
}

export default ColorsListAction