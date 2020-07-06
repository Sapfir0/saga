import {AllEffect, ForkEffect} from "redux-saga/effects"
import {ActionTypePayload, IPayload} from "../typings";

type generator = Generator<unknown, void, unknown>

export interface ISaga {
    workerLoadColors: () => generator
    workerLoadColor: (action: ActionTypePayload<IPayload>) => generator
}