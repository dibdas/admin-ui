import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import "./Buttons.scss";

function Buttons({ id }) {
  const [Id, setId] = useState(null);
  // console.log(Id);
  function handleEdit(event) {
    // console.log(event.target.value);
    setId(event.target.value);
    console.log(Id);
  }
  function handleDelete(event) {
    // console.log(event.target.value);
  }
  return (
    <div className="buttons">
      <div className="edit" onClick={() => setId(id)}>
        <BiEditAlt />
      </div>
      <div className="delete">
        <AiOutlineDelete onClick={handleDelete} />
      </div>
    </div>
  );
}

export default Buttons;
