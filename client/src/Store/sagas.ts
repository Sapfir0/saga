import {takeEvery, put, call} from "redux-saga/effects"
import {LOAD_DATA, getColors} from "./actions";
import axios from "axios"
import {serverUrl} from "../config/config";


function* workerLoadData() {
    const data = yield axios.get(serverUrl + "/getColors") // хм yield вместо await, меня это пугает немного

    yield put(getColors(data))
}


export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData)
}

