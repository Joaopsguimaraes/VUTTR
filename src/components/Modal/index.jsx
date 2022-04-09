import React from "react";
import { FaPlus } from "react-icons/fa";
import "./style.css";

const Modal = () => {
  return (
    <div className="modal-container">
      <form className="modal-form">
        <div className="tittle-form">
          <FaPlus />
          <h2>Add new tool</h2>
        </div>
        <div>
          <p>Tool Name</p>
          <input type="text" />
        </div>
        <div>
          <p>Tool Link</p>
          <input type="text" />
        </div>
        <div>
          <p>Tool Description</p>
          <textarea rows="5" />
        </div>
        <div>
          <p>Tags</p>
          <input type="text" id="tagsModal" />
        </div>

        <button type="submit" id="addTool">Add Tool</button>
      </form>
    </div>
  );
};

export default Modal;
