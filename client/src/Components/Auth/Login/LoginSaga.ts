import {takeEvery, put, call, fork, all} from "redux-saga/effects"
import {inject, injectable} from "inversify";
import {ILoginSaga} from "../../../typings/ISaga";
import AuthenticationInteractionService from "../../../services/AuthenticationInteractionService";
import {ILoginAction} from "../../../typings/IAction";
import {TYPES} from "../../../services/typings/types";
import {ActionTypePayload, ILoginPayload} from "../../../typings/common";
import {LOAD_AUTH_ACTIONS} from "../../../Store/actionsName";



@injectable()
class LoginSaga implements ILoginSaga {
    private readonly _fetcher: AuthenticationInteractionService
    private _actions: ILoginAction

    constructor(
        @inject(TYPES.AuthenticationInteractionService) fetcher: AuthenticationInteractionService,
        @inject(TYPES.LoginAction) actions: ILoginAction
    ) {
        this._actions = actions
        this._fetcher = fetcher

        this.workerLoadLogin = this.workerLoadLogin.bind(this)
    }


    public *workerLoadLogin(action: ActionTypePayload<ILoginPayload, LOAD_AUTH_ACTIONS>) {
        const data = yield this._fetcher.signIn({...action.payload})
        yield put(this._actions.getLogin(data))

    }

}

export default LoginSaga
