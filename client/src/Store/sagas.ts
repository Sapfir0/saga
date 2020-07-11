import {TYPES} from "../services/typings/types";
import {all, takeEvery} from "redux-saga/effects";
import {LOAD_COLOR, LOAD_COLORS, LOAD_LOGIN, LOAD_LOGOUT} from "./actionsName";
import {myContainer} from "../config/inversify.config";
import LoginSaga from "../Components/Auth/Login/LoginSaga";
import LogoutSaga from "../Components/Auth/Logout/LogoutSaga";
import ColorListSaga from "../Components/Color/ColorListSaga";
import {ColorsListSaga} from "../Components/Colors/ColorsListSaga";


export default function* rootSaga() {
    const colors = myContainer.get<ColorsListSaga>(TYPES.ColorsListSaga)
    const color = myContainer.get<ColorListSaga>(TYPES.ColorListSaga)

    const loginSaga = myContainer.get<LoginSaga>(TYPES.LoginSaga)
    const logoutSaga = myContainer.get<LogoutSaga>(TYPES.LogoutSaga)

    yield all([
        takeEvery(LOAD_COLOR, color.workerLoadColor),
        takeEvery(LOAD_COLORS, colors.workerLoadColors),
        takeEvery(LOAD_LOGIN, loginSaga.workerLoadLogin),
        takeEvery(LOAD_LOGOUT, logoutSaga.workerLoadLogout)
    ])
}