import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import ClientRoutes from "../../config/clientRoutes";
import TokenService from "../../services/TokenService";
import {TYPES} from "../../services/typings/types";
import {myContainer} from "../../config/inversify.config";
import {connect} from "react-redux";
import {LoginReducer} from "../../typings/common";


export interface IRoute extends RouteProps {

}


function PrivateRoute(props: IRoute) {
    const redirectPath = ClientRoutes.FORBIDDEN;
    const tokenService = myContainer.get<TokenService>(TYPES.TokenService)
    const isAuthed = tokenService.isAuth()
    console.log("редиректим через роутер")

    if (!isAuthed) {
        const renderComponent = () => <Redirect to={redirectPath} />;
        return <Route {...props} component={renderComponent} render={undefined} />;
    } else {
        return <Route {...props} />;
    }
}

const authAction = (state: {authReducer: LoginReducer}) => {
    return {
        auth: state.authReducer
    }
}


export default connect(authAction)(PrivateRoute)