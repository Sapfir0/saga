import {loadColor} from "../Store/actions";
import {connect, useDispatch} from "react-redux";
import React from "react";
import CurrentColor from "../Components/CurrentColor/CurrentColor";
import {store} from "../Store";
import {IColor} from "../Store/typings";

interface IProps {
    color: IColor
}

function CurrentColorContainer(props: IProps) {
    const dispatch = useDispatch()
    const onClick = (event: any, id: number) => {
        dispatch(loadColor(id))
    }
    return <CurrentColor color={props.color} onClick={onClick} />
}


const changeColorAction = (state: {color: IColor}) => {
    return {
        color: state.color
    }
}

export default connect(changeColorAction)(CurrentColorContainer)