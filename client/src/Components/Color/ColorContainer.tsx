import React from "react";
import {connect, useDispatch} from "react-redux";
import {myContainer} from "../../config/inversify.config";
import {TYPES} from "../../services/typings/types";
import {IColor, IMouseEvent} from "../../typings/common";
import Color from "./Color";
import {IColorListAction} from "../../typings/IAction";


interface IProps {
    color: IColor
}

function ColorContainer(props: IProps) {
    const actions = myContainer.get<IColorListAction>(TYPES.ColorListAction)

    const dispatch = useDispatch()
    const onClick = (event: IMouseEvent, id: number) => dispatch(actions.loadColor(id))

    return <Color color={props.color} onClick={onClick} />
}


const changeColorAction = (state: {colorListReducer: {color: IColor}}) => {
    return {
        color: state.colorListReducer.color
    }
}


export default connect(changeColorAction)(ColorContainer)