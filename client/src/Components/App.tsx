import React from 'react';
import {Route, BrowserRouter, Router, Switch, withRouter} from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ColorsPage from "./Pages/Colors/Colors";
import ColorPage from "./Pages/Color/Color";
import IndexPage from "./Pages/Index";
import ClientRoutes from "../config/clientRoutes";
import Redirection from "../services/Redirection";
import {TYPES} from "../services/typings/types";
import NotFoundPage from "./Pages/NotFound/NotFound";
import {ConnectedRouter} from "connected-react-router";
import HeaderContainer from "./Header/HeaderContainer";
import {myContainer} from "../config/inversify.config";
import ForbiddenPage from "./Pages/Forbidden/ForbiddenPage";


const redirect = myContainer.get<Redirection>(TYPES.Redirection)


function App() {
    return (
        <>
            <HeaderContainer/>
            <ConnectedRouter history={redirect.history}>
                <Switch>
                    <PrivateRoute path={ClientRoutes.COLORS_URL} component={ColorsPage}/>
                    <PrivateRoute path={ClientRoutes.COLOR_URL} component={ColorPage}/>
                    <Route path={ClientRoutes.NOT_FOUND} component={NotFoundPage}/>
                    <Route path={ClientRoutes.FORBIDDEN} component={ForbiddenPage}/>
                    <Route path={ClientRoutes.INDEX_URL} component={IndexPage}/>
                </Switch>
            </ConnectedRouter>
        </>
    )
}

export default  App;