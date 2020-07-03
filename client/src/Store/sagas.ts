import {takeEvery, put, call, fork, all} from "redux-saga/effects"
import {LOAD_COLORS, getColors, getColor, LOAD_COLOR} from "./actions";
import axios from "axios"
import {serverUrl} from "../config/config";
import {ActionType} from "./typings";


function* workerLoadColors() {
    const data = yield axios.get(serverUrl + "/getColors") // хм yield вместо await, меня это пугает немного
    yield put(getColors(data.data))
}


function* workerLoadColor(action: ActionType) {
    const id = action.payload.id
    try {
        const data = yield axios.post(serverUrl + "/getColor", {id: id})
        yield put(getColor(data.data))
    }
    catch (e) {
        yield put(getColor("Color not found"))
    }
}


export function* rootSaga() {
    yield all([
        takeEvery(LOAD_COLOR, workerLoadColor),
        takeEvery(LOAD_COLORS, workerLoadColors)
    ])
}