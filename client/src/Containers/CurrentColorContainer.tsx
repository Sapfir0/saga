import {loadColor} from "../Store/actions";
import {connect, useDispatch} from "react-redux";
import React from "react";
import CurrentColor from "../Components/CurrentColor/CurrentColor";
import {store} from "../Store";
import {IColor} from "../Store/typings";


function CurrentColorContainer() {
    const dispatch = useDispatch()
    const onClick = (event: any, id: number) => {
        dispatch(loadColor(id))
    }

    return <CurrentColor color={store.getState().color} onClick={onClick} />
}

const mapDispatchToProps = {
    changedColors: loadColor
}


const changeColorAction = (state: {color: IColor}) => {
    return {
        color: state.color
    }
}

export default connect(changeColorAction, mapDispatchToProps)(CurrentColorContainer)