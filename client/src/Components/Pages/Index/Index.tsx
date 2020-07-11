import React from "react";
import {Link} from "react-router-dom";
import ClientRoutes from "../../../config/clientRoutes";

export default function IndexPage() {
    return(<ul>
        {/*<li> <Link to={ClientRoutes.SIGN_IN_URL}> Авторизация </Link> </li>*/}
        {/*<li> <Link to={ClientRoutes.LOGOUT_URL}> Выйти </Link> </li>*/}
        <li> <Link to={ClientRoutes.COLOR_URL}> Получить конкретный цвет </Link> </li>
        <li> <Link to={ClientRoutes.COLORS_URL}> Получить много цветов </Link> </li>

    </ul>)
}