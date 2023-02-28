import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import "./Buttons.scss";

function Buttons({ id }) {
  return (
    <div className="buttons">
      <div className="edit">
        <BiEditAlt />
      </div>
      <div className="delete">
        <AiOutlineDelete />
      </div>
    </div>
  );
}

export default Buttons;
