import {connect, useDispatch} from "react-redux";
import React from "react";
import {IColor, IMouseEvent} from "../../Store/typings";
import {myContainer} from "../../typings/inversify.config";
import Actions from "../../Store/Actions";
import {TYPES} from "../../services/typings/types";
import CurrentColor from "../../Components/CurrentColor/CurrentColor";

interface IProps {
    color: IColor
}

function CurrentColorContainer(props: IProps) {
    const actions = myContainer.get<Actions>(TYPES.Actions)

    const dispatch = useDispatch()
    const onClick = (event: IMouseEvent, id: number) => {
        dispatch(actions.loadColor(id))
    }
    return <CurrentColor color={props.color} onClick={onClick} />
}


const changeColorAction = (state: {colorReducer: {color: IColor}}) => {
    return {
        color: state.colorReducer.color
    }
}

export default connect(changeColorAction)(CurrentColorContainer)