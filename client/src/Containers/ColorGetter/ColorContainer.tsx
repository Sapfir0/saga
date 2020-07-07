import React from "react";
import {connect, useDispatch} from "react-redux";
import {IColors} from "../../Store/typings";
import {myContainer} from "../../typings/inversify.config";
import {TYPES} from "../../services/typings/types";
import Actions from "../../Store/Actions";
import {Colors} from "../../Components/Colors/Colors";


interface IProps  {
    colors: IColors
}

function ColorsContainer(props: IProps) {
    console.log(props)

    const actions = myContainer.get<Actions>(TYPES.Actions)

    const dispatch = useDispatch()
    const onClick = () => dispatch(actions.loadColors())

    return <Colors onClick={onClick} colors={props.colors}/>
}


const changeColorAction = (state: {colorReducer: {colors: IColors}}) => {
    return {
        colors: state.colorReducer.colors
    }
}

export default connect(changeColorAction)(ColorsContainer)