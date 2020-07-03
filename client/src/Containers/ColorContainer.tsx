import {connect, useDispatch} from "react-redux";
import {loadColors} from "../Store/actions";
import {Colors} from "../Components/Colors/Colors";
import React from "react";
import {store} from "../Store";
import {IColor, IColors} from "../Store/typings";

interface IProps  {
    colors: IColors
}

function ColorsContainer(props: IProps) {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(loadColors())
    }


    return <Colors onClick={onClick} colors={props.colors}/>
}


const changeColorAction = (state: {colors: IColors}) => {
    return {
        colors: state.colors
    }
}

export default connect(changeColorAction)(ColorsContainer)