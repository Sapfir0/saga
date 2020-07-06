import {AllEffect, ForkEffect} from "redux-saga/effects"
import {ActionType} from "../typings";

type generator = Generator<unknown, void, unknown>

export interface ISaga {
    // rootSaga: () =>  Generator<AllEffect<ForkEffect<never>>, void, unknown>
    workerLoadColors: () => generator
    workerLoadColor: (action: ActionType) => generator
}