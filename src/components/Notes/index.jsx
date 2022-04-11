import React from "react";
import "./style.css";
import RemoveTool from "../RemoveNote";

const Notes = (props) => {
  return (
    <div className="Notes card-notes">
      <div className="title-note">
        <a href={props.link} target="blank">
          {props.nameCard}
        </a>
        <RemoveTool />
      </div>
      <p>{props.descriptionCard}</p>
      <p id="tags">{props.tagsCard}</p>
    </div>
  );
};

export default Notes;
