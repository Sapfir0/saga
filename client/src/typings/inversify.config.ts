import "reflect-metadata";

import {Container} from "inversify";
import {TYPES} from "../services/typings/types";
import ApiHelper from "../services/ApiHelper";
import InteractionService from "../services/InteractionService";
import {Saga} from "../Store/Saga";
import {IApiHelper} from "../services/typings/IApiHelper";
import {IInteractionService} from "../services/typings/IInteractionService";
import {ISaga} from "../Store/typings/ISaga";
import Actions from "../Store/Actions";
import {IActions} from "../Store/typings/IActions";

const myContainer = new Container();

myContainer.bind<IActions>(TYPES.Actions).to(Actions)
myContainer.bind<IApiHelper>(TYPES.ApiHelper).to(ApiHelper)
myContainer.bind<IInteractionService>(TYPES.InteractionService).to(InteractionService)
myContainer.bind<ISaga>(TYPES.Saga).to(Saga)

// myContainer.bind<ApiHelper>(TYPES.ApiHelper).to(InteractionService)
// myContainer.bind<Actions>(TYPES.Actions).to(Saga)
// myContainer.bind<InteractionService>(TYPES.InteractionService).to(Saga)


export { myContainer }