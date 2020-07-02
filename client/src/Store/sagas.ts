import {takeEvery, put, call} from "redux-saga/effects"
import {LOAD_DATA, putData} from "./actions";
import axios from "axios"
import {serverUrl} from "../config/config";

async function getColors() {
    return await axios.get(serverUrl + "/getColors")
}

function* workerLoadData() {
    const data = yield call(getColors)

    yield put(putData(data))
}


export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData)
}

