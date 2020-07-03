import {takeEvery, put, call} from "redux-saga/effects"
import {LOAD_COLORS, getColors, getColor, LOAD_COLOR} from "./actions";
import axios from "axios"
import {serverUrl} from "../config/config";
import {ActionType} from "./reducers";


function* workerLoadColors() {
    const data = yield axios.get(serverUrl + "/getColors") // хм yield вместо await, меня это пугает немного
    yield put(getColors(data.data))
}


export function* watchLoadColors() {
    yield takeEvery(LOAD_COLORS, workerLoadColors)
}



function* workerLoadColor(action: ActionType) {
    console.log(action)
    const id = action.payload.id
    const data = yield axios.post(serverUrl + "/getColor", {id: id})
    yield put(getColor(data.data))
}


export function* watchLoadColor() {
    //yield takeEvery(LOAD_COLOR, call(workerLoadColor, 2))
    yield takeEvery(LOAD_COLOR, workerLoadColor)
}