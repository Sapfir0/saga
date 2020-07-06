import {GET_COLOR, GET_COLORS, LOAD_COLOR, LOAD_COLORS} from "./actionsName";
import {IActions} from "./typings/IActions";
import {DTO} from "../typings/common";

class Actions implements IActions {
    public getColors = (dataFromServer: DTO) => ({
        type: GET_COLORS,
        payload: dataFromServer
    })

    public getColor = (dataFromServer: DTO) => ({
        type: GET_COLOR,
        payload: dataFromServer
    })

    public loadColors = () => ({
        type: LOAD_COLORS
    })

    public loadColor = (id: number) => ({
        type: LOAD_COLOR,
        payload: {
            id
        }
    })
}

export default Actions