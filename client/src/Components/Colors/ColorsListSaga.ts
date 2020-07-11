import {takeEvery, put, call, fork, all} from "redux-saga/effects"
import {inject, injectable} from "inversify";
import { ServerRoutes } from "../../config/serverRoutes"
import BaseInteractionService from "../../services/BaseInteractionService";
import {TYPES} from "../../services/typings/types";
import {IColorsListSaga} from "../../typings/ISaga";
import {IColorsListAction} from "../../typings/IAction";


@injectable()
class ColorsListSaga implements IColorsListSaga  {
    private fetcher: BaseInteractionService
    private actions: IColorsListAction

    constructor(
        @inject(TYPES.BaseInteractionService) fetcher: BaseInteractionService,
        @inject(TYPES.ColorsListAction) actions: IColorsListAction
    ) {
        this.actions = actions
        this.fetcher = fetcher

        this.workerLoadColors = this.workerLoadColors.bind(this);
    }

    public *workerLoadColors() {
        const data = yield this.fetcher.get(ServerRoutes.COLORS_URL)
        yield put(this.actions.getColors(data.value))
    }


}

export {ColorsListSaga}