import {loadData} from "../Store/actions";
import {IColor} from "../Store/reducers";
import {connect, useDispatch} from "react-redux";
import {Colors} from "../Components/Colors/Colors";
import React from "react";
import CurrentColor from "../Components/CurrentColor/CurrentColor";


function CurrentColorContainer() {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(loadData())
    }

    return <CurrentColor onClick={onClick} />
}

const mapDispatchToProps = {
    changedColors: loadData
}

const changeColorAction = (state: {color: IColor}) => {
    return {
        color: state.color
    }
}

export default connect(changeColorAction)(CurrentColorContainer)