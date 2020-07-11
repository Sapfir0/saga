import createSagaMiddleware from "redux-saga";
import {applyMiddleware, compose, createStore} from "redux";
import createRootReducer from "./reducers";
import logger from "redux-logger";
import rootSaga from "./sagas";
import { routerMiddleware, connectRouter } from "connected-react-router";
import Redirection from "../services/Redirection";
import {TYPES} from "../services/typings/types";
import {myContainer} from "../config/inversify.config";


const redirect = myContainer.get<Redirection>(TYPES.Redirection)

const sagaMiddleware = createSagaMiddleware()
const middlewares = [logger, routerMiddleware(redirect.history), sagaMiddleware ];

export const store = compose(applyMiddleware(...middlewares))(createStore)(createRootReducer(redirect.history));

sagaMiddleware.run(rootSaga)

