import {connect, useDispatch} from "react-redux";
import {loadData} from "../Store/actions";
import {Colors} from "../Components/Colors/Colors";
import React from "react";
import {store} from "../Store";
import {IColor} from "../Store/reducers";

function ColorContainer() {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(loadData())
    }

    return <Colors onClick={onClick} />
}


const mapDispatchToProps = {
    changedColors: loadData
}

const changeColorAction = (state: {colors: IColor}) => {
    return {
        colors: state.colors
    }
}

export default connect(changeColorAction)(ColorContainer)