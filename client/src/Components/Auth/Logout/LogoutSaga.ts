import {takeEvery, put, call, fork, all} from "redux-saga/effects"
import {inject, injectable} from "inversify";
import LogoutAction from "./LogoutAction";
import {ILogoutSaga} from "../../../typings/ISaga";
import AuthenticationInteractionService from "../../../services/AuthenticationInteractionService";
import {TYPES} from "../../../services/typings/types";


@injectable()
class LogoutSaga implements ILogoutSaga {
    private readonly _fetcher: AuthenticationInteractionService
    private _actions: LogoutAction

    constructor(
        @inject(TYPES.AuthenticationInteractionService) fetcher: AuthenticationInteractionService,
        @inject(TYPES.LogoutAction) actions: LogoutAction
    ) {
        this._actions = actions
        this._fetcher = fetcher

        this.workerLoadLogout = this.workerLoadLogout.bind(this)
    }

    public *workerLoadLogout() {
        const data = yield this._fetcher.logout()
        yield put(this._actions.getLogout())
    }
}


export default LogoutSaga