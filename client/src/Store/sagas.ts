import {takeEvery, put, call, fork, all} from "redux-saga/effects"
import {LOAD_COLORS, getColors, getColor, LOAD_COLOR} from "./actions";
import axios from "axios"
import {serverUrl} from "../config/config";
import {ActionType} from "./typings";
import {get, post} from "../services/InteractionService";


function* workerLoadColors() {
    const data = yield get("getColors")
    yield put(getColors(data.data))
}


function* workerLoadColor(action: ActionType) {
    const id = action.payload.id

    const data = yield post("getColor", {id: id})
    yield put(getColor(data.data))
}


export function* rootSaga() {
    yield all([
        takeEvery(LOAD_COLOR, workerLoadColor),
        takeEvery(LOAD_COLORS, workerLoadColors)
    ])
}