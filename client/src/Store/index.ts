import createSagaMiddleware from "redux-saga";
import {applyMiddleware, compose, createStore} from "redux";
import "../typings/inversify.config"
import mainReducer from "./mainReducer";
import logger from "redux-logger";
import rootSaga from "./Saga";
import {colorReducer} from "./reducers/reducers";

const sagaMiddleware = createSagaMiddleware()
const middlewares = [logger, sagaMiddleware];

export const store = compose(applyMiddleware(...middlewares))(createStore)(mainReducer);
console.log(store.getState())

sagaMiddleware.run(rootSaga)

