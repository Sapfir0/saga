import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import {reducer} from "./reducers";
import logger from "redux-logger";
import rootSaga from "./Sagas";

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))


sagaMiddleware.run(rootSaga)

