import {ActionTypePayload, IColorPayload, ILoginPayload} from "./common";
import {GET_AUTH_ACTIONS, GET_COLOR_ACTION, LOAD_AUTH_ACTIONS, LOAD_COLOR_ACTION} from "../Store/actionsName";

type generator = Generator<unknown, void, unknown>

export interface IColorsListSaga {
    workerLoadColors: () => generator
}

export interface IColorListSaga {
    workerLoadColor: (action: ActionTypePayload<IColorPayload, LOAD_COLOR_ACTION>) => generator
}

export interface ILoginSaga {
    workerLoadLogin: (action: ActionTypePayload<ILoginPayload, LOAD_AUTH_ACTIONS>) => generator
}

export interface ILogoutSaga {
    workerLoadLogout: () => generator
}

