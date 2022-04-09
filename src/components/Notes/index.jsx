import React from "react";
import {MdCancel} from 'react-icons/md'
import { Button } from "@mui/material";
import "./style.css"

const Notes = (props) => {
    return(
        <div className="Notes card-notes">
            <div className="title-note">
                <a href={props.link}>{props.nameCard}</a>
                {/*<button id="removeCard"><MdCancel/>remove</button>*/}
                <Button variant="text" color="error">Remove</Button>

            </div>
            <p>{props.descriptionCard}</p>
            <p id="tags">{props.tagsCard}</p>
        </div>
    )
}

export default Notes;