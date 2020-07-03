import {connect, useDispatch} from "react-redux";
import {loadColors} from "../Store/actions";
import {Colors} from "../Components/Colors/Colors";
import React from "react";
import {store} from "../Store";
import {IColor} from "../Store/typings";

function ColorContainer() {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(loadColors())
    }

    return <Colors onClick={onClick}  colors={store.getState().colors}/>
}


const mapDispatchToProps = {
    changedColors: loadColors
}

const changeColorAction = (state: {colors: IColor}) => {
    return {
        colors: state.colors
    }
}

export default connect(changeColorAction, mapDispatchToProps)(ColorContainer)