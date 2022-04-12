import React from "react";
import "./style.css";
import RemoveTool from "../RemoveTool";

const Tool = (props) => {
  return (
    <div className="Notes card-notes">
      <div className="title-note">
        <a href={props.link} target="blank">
          {props.name}
        </a>
        <RemoveTool id={props.id} />
      </div>
      <p>{props.description}</p>
      <p id="tags">{props.tags}</p>
    </div>
  );
};

export default Tool;
