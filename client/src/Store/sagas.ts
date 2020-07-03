import {takeEvery, put, call, fork, all} from "redux-saga/effects"
import {LOAD_COLORS, getColors, getColor, LOAD_COLOR} from "./actions";
import axios from "axios"
import {serverUrl} from "../config/config";
import {ActionType} from "./typings";
import InteractionService from "../services/InteractionService";

const fetcher = new InteractionService()

function* workerLoadColors() {
    const data = yield fetcher.get("getColors")
    yield put(getColors(data.data))
}


function* workerLoadColor(action: ActionType) {
    const id = action.payload.id

    const data = yield fetcher.post("getColor", {id: id})
    yield put(getColor(data.data))
}


export function* rootSaga() {
    yield all([
        takeEvery(LOAD_COLOR, workerLoadColor),
        takeEvery(LOAD_COLORS, workerLoadColors)
    ])
}