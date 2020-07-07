import {takeEvery, put, call, fork, all} from "redux-saga/effects"
import {myContainer} from "../typings/inversify.config";
import Actions from "./Actions";
import {ActionTypePayload, IColorPayload, ILoginPayload} from "./typings";
import InteractionService from "../services/InteractionService";
import {LOAD_COLOR, LOAD_COLORS, LOGIN} from "./actionsName";
import {ISaga} from "./typings/ISaga";
import {inject, injectable} from "inversify";
import {TYPES} from "../services/typings/types";


@injectable()
class Saga implements ISaga {
    private fetcher: InteractionService
    private actions: Actions

    constructor(
        @inject(TYPES.InteractionService) fetcher: InteractionService,
        @inject(TYPES.Actions) actions: Actions
    ) {
        this.actions = actions
        this.fetcher = fetcher

        this.workerLoadColors = this.workerLoadColors.bind(this);
        this.workerLoadColor = this.workerLoadColor.bind(this);
    }

    public *workerLoadColors() {
        const data = yield this.fetcher.get("getColors")
        yield put(this.actions.getColors(data.data))
    }

    public *workerLoadColor(action: ActionTypePayload<IColorPayload>) {
        const id = action.payload.id

        const data = yield this.fetcher.post("getColor", {id: id})
        yield put(this.actions.getColor(data.data))
    }

    public *workerLoadLogin(action: ActionTypePayload<ILoginPayload>) {
        // const [username, password] = action.payload
        const username = action.payload.username
        const password = action.payload.password

        const data = yield this.fetcher.post("signIn", {username, password})
        yield put(this.actions.getColor(data.data))
    }
}

export default function* rootSaga() {
    const sagas = myContainer.get<Saga>(TYPES.Saga)
    yield all([
        takeEvery(LOAD_COLOR, sagas.workerLoadColor),
        takeEvery(LOAD_COLORS, sagas.workerLoadColors),
        takeEvery(LOGIN, sagas.workerLoadLogin)
    ])
}


export {Saga}