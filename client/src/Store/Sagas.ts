import {takeEvery, put, call, fork, all} from "redux-saga/effects"
import Actions from "./Actions";
import {ActionType} from "./typings";
import InteractionService from "../services/InteractionService";
import {LOAD_COLOR, LOAD_COLORS} from "./actionsName";
import {ISagas} from "./typings/ISagas";


class Sagas implements ISagas {
    private fetcher: InteractionService;
    private actions: Actions;


    constructor() {
        this.fetcher = new InteractionService()
        this.actions = new Actions()

        this.workerLoadColors = this.workerLoadColors.bind(this);
        this.workerLoadColor = this.workerLoadColor.bind(this);
    }

    *workerLoadColors() {
        const data = yield this.fetcher.get("getColors")
        yield put(this.actions.getColors(data.data))
    }


    *workerLoadColor(action: ActionType) {
        const id = action.payload.id

        const data = yield this.fetcher.post("getColor", {id: id})
        yield put(this.actions.getColor(data.data))
    }

}

export default function* rootSaga() {
    const sagas = new Sagas()
    yield all([
        takeEvery(LOAD_COLOR, sagas.workerLoadColor),
        takeEvery(LOAD_COLORS, sagas.workerLoadColors)
    ])
}


