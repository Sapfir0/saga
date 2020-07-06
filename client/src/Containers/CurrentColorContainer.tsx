import Actions from "../Store/Actions";
import {connect, useDispatch} from "react-redux";
import React from "react";
import CurrentColor from "../Components/CurrentColor/CurrentColor";
import {IColor} from "../Store/typings";

interface IProps {
    color: IColor
}

function CurrentColorContainer(props: IProps) {
    const actions = new Actions()

    const dispatch = useDispatch()
    const onClick = (event: any, id: number) => {
        dispatch(actions.loadColor(id))
    }
    return <CurrentColor color={props.color} onClick={onClick} />
}


const changeColorAction = (state: {color: IColor}) => {
    return {
        color: state.color
    }
}

export default connect(changeColorAction)(CurrentColorContainer)