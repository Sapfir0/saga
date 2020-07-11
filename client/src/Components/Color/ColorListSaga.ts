import {takeEvery, put, call, fork, all} from "redux-saga/effects"
import {inject, injectable} from "inversify";
import {ServerRoutes} from "../../config/serverRoutes"
import BaseInteractionService from "../../services/BaseInteractionService";
import {TYPES} from "../../services/typings/types";
import {IColorListSaga} from "../../typings/ISaga";
import {ActionTypePayload, IColorPayload} from "../../typings/common";
import {IColorListAction} from "../../typings/IAction";
import {GET_COLOR_ACTION, LOAD_COLOR_ACTION} from "../../Store/actionsName";
import {merge} from "@sweet-monads/either";


@injectable()
class ColorListSaga implements IColorListSaga {
    private fetcher: BaseInteractionService
    private actions: IColorListAction

    constructor(
        @inject(TYPES.BaseInteractionService) fetcher: BaseInteractionService,
        @inject(TYPES.ColorListAction) actions: IColorListAction
    ) {
        this.actions = actions
        this.fetcher = fetcher

        this.workerLoadColor = this.workerLoadColor.bind(this);
    }


    public *workerLoadColor(action: ActionTypePayload<IColorPayload, LOAD_COLOR_ACTION>) {
        const data = yield this.fetcher.post(ServerRoutes.COLOR_URL, {id: action.payload.id})
        yield put(this.actions.getColor(data.value))
    }

}

export default ColorListSaga