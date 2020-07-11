import "reflect-metadata";
import {Container, multiBindToService} from "inversify";
import {TYPES} from "../services/typings/types";
import ApiHelper from "../services/ApiHelper";
import BaseInteractionService from "../services/BaseInteractionService";
import {IApiHelper} from "../services/typings/IApiHelper";
import {IBaseInteractionService} from "../services/typings/IBaseInteractionService";
import {ILocalStorage} from "../services/typings/ILocalStorage";
import LocalStorage from "../services/LocalStorage";
import {ITokenService} from "../services/typings/ITokenService";
import TokenService from "../services/TokenService";
import Redirection from "../services/Redirection";
import {IRedirection} from "../services/typings/IRedirection";
import {IAuthenticationInteractionService} from "../services/typings/IAuthenticationInteractionService";
import AuthenticationInteractionService from "../services/AuthenticationInteractionService";
import ColorListAction from "../Components/Color/ColorListAction";
import ColorsListAction from "../Components/Colors/ColorsListAction";
import ColorListSaga from "../Components/Color/ColorListSaga";
import {ColorsListSaga} from "../Components/Colors/ColorsListSaga";
import {IColorListAction, IColorsListAction, ILoginAction, ILogoutAction} from "../typings/IAction";
import {IColorListSaga, IColorsListSaga, ILoginSaga, ILogoutSaga} from "../typings/ISaga";
import LogoutAction from "../Components/Auth/Logout/LogoutAction";
import LoginAction from "../Components/Auth/Login/LoginAction";
import LogoutSaga from "../Components/Auth/Logout/LogoutSaga";
import LoginSaga from "../Components/Auth/Login/LoginSaga";

const myContainer = new Container();

// Login/Logout actions
myContainer.bind<ILogoutAction>(TYPES.LogoutAction).to(LogoutAction)
myContainer.bind<ILoginAction>(TYPES.LoginAction).to(LoginAction)

// Login/Logout sagas
myContainer.bind<ILogoutSaga>(TYPES.LogoutSaga).to(LogoutSaga)
myContainer.bind<ILoginSaga>(TYPES.LoginSaga).to(LoginSaga)


// Colors actions
myContainer.bind<IColorsListAction>(TYPES.ColorsListAction).to(ColorsListAction)
myContainer.bind<IColorListAction>(TYPES.ColorListAction).to(ColorListAction)

// Colors sagas
myContainer.bind<IColorsListSaga>(TYPES.ColorsListSaga).to(ColorsListSaga)
myContainer.bind<IColorListSaga>(TYPES.ColorListSaga).to(ColorListSaga)


myContainer.bind<IApiHelper>(TYPES.ApiHelper).to(ApiHelper)
myContainer.bind<IRedirection>(TYPES.Redirection).to(Redirection).inSingletonScope()
myContainer.bind<ILocalStorage>(TYPES.LocalStorage).to(LocalStorage)
myContainer.bind<ITokenService>(TYPES.TokenService).to(TokenService)
myContainer.bind<IBaseInteractionService>(TYPES.BaseInteractionService).to(BaseInteractionService)
myContainer.bind<IAuthenticationInteractionService>(TYPES.AuthenticationInteractionService).to(AuthenticationInteractionService)

export { myContainer }