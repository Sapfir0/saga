import React from "react";
import {useDispatch} from "react-redux";
import {loadData} from "../../Store/actions";


export default function Connected() {
    const dispatch = useDispatch()
    const onClick = () => dispatch(loadData())

    return <button onClick={onClick}>WTF</button>
}