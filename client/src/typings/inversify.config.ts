import {Container} from "inversify";
import "reflect-metadata";
import Actions from "../Store/Actions";
import {TYPES} from "../services/typings/types";
import ApiHelper from "../services/ApiHelper";
import InteractionService from "../services/InteractionService";
import {Saga} from "../Store/Saga";


const myContainer = new Container();
myContainer.bind<ApiHelper>(TYPES.ApiHelper).to(InteractionService)
myContainer.bind<Actions>(TYPES.Actions).to(Saga)
myContainer.bind<InteractionService>(TYPES.InteractionService).to(Saga)


export { myContainer }