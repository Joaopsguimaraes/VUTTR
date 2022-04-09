import React, { Fragment } from "react";
import {FaPlus} from 'react-icons/fa'
import "./style.css"

const ButtonAdd = () => {
    return(
        <Fragment>
            <button 
                id="addButton">
            <FaPlus/>
            Add
            </button>
        </Fragment>
    )
}
export default ButtonAdd;