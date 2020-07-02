import {takeEvery, put, call} from "redux-saga/effects"
import {LOAD_DATA, putData} from "./actions";
import axios from "axios"
import {serverUrl} from "../config/config";


function* workerLoadData() {
    const data = yield axios.get(serverUrl + "/getColors") // тут нет await, меня это пугает немного

    yield put(putData(data))
}


export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData)
}

