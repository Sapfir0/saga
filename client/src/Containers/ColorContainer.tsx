import {connect, useDispatch} from "react-redux";
import Actions from "../Store/Actions";
import {Colors} from "../Components/Colors/Colors";
import React from "react";
import {IColor, IColors} from "../Store/typings";

interface IProps  {
    colors: IColors
}

function ColorsContainer(props: IProps) {
    const actions = new Actions()

    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(actions.loadColors())
    }
    return <Colors onClick={onClick} colors={props.colors}/>
}


const changeColorAction = (state: {colors: IColors}) => {
    return {
        colors: state.colors
    }
}

export default connect(changeColorAction)(ColorsContainer)