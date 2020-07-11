import React from "react";
import {connect, useDispatch} from "react-redux";
import {TYPES} from "../../services/typings/types";
import {Colors} from "./Colors";
import {IColors} from "../../typings/common";
import {IColorsListAction} from "../../typings/IAction";
import {myContainer} from "../../config/inversify.config";


interface IProps  {
    colors: IColors
}

function ColorsContainer(props: IProps) {
    const actions = myContainer.get<IColorsListAction>(TYPES.ColorsListAction)

    const dispatch = useDispatch()
    const onClick = () => dispatch(actions.loadColors())

    return <Colors onClick={onClick} colors={props.colors}/>
}

const changeColorsAction = (state: {colorsListReducer: {colors: IColors}}) => {
    return {
        colors: state.colorsListReducer.colors
    }
}


export default connect(changeColorsAction)(ColorsContainer)