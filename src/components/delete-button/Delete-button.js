import React from "react";
import "./Delete-button.scss";

function DeleteButton({ onSelect }) {
  return (
    <div className="delete">
      <div className="delete-selected" onClick={() => onSelect(true)}>
        <h5>Delete Selected</h5>
      </div>
    </div>
  );
}

export default DeleteButton;
