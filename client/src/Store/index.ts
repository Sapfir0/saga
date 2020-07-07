import createSagaMiddleware from "redux-saga";
import {applyMiddleware, compose, createStore} from "redux";
import "../typings/inversify.config"
import mainReducer from "./mainReducer";
import logger from "redux-logger";
import rootSaga from "./Saga";


const sagaMiddleware = createSagaMiddleware()
const middlewares = [logger, sagaMiddleware];

export const store = compose(applyMiddleware(...middlewares))(createStore)(mainReducer);

sagaMiddleware.run(rootSaga)

