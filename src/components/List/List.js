import React, { useState } from "react";
import Buttons from "../buttons/Buttons";
import Checkbox from "../checkbox/Checkbox";
import Pagination from "../pagination/Pagination";
import "./List.scss";
// import { BiEditAlt } from "react-icons/bi";
// import { AiOutlineDelete } from "react-icons/ai";
function List({ user, onSelected, itemOffset, endOffset }) {
  const [isSelected, setIsSelected] = useState(false);
  function handleClick(event) {}
  return (
    <>
      <div className="list-component">
        <div className="list">
          <div className="checkbox">
            <Checkbox
              userId={user.id}
              onSelect={() => setIsSelected(!isSelected)}
              onSelected={onSelected}
            />
          </div>
          <div className="list-details">
            <div className="name">{user.name}</div>
            <div className="email">{user.email}</div>
            <div className="role">{user.role}</div>
          </div>
          <div className="function-buttons">
            <Buttons id={user.id} />
          </div>
        </div>
      </div>
      {/* <Pagination itemsPerPage={10} pageCount={pageCount} users={users} /> */}
    </>
  );
}

export default List;
