import {loadColor} from "../Store/actions";
import {IColor} from "../Store/reducers";
import {connect, useDispatch} from "react-redux";
import {Colors} from "../Components/Colors/Colors";
import React from "react";
import CurrentColor from "../Components/CurrentColor/CurrentColor";
import {store} from "../Store";


function CurrentColorContainer() {
    const dispatch = useDispatch()
    const onClick = (event: any, id: number) => {
        console.log(id, event)
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