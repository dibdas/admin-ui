import React from "react";
import Pagination from "../pagination/Pagination";
import "./List.scss";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

function List({ user }) {
  return (
    <>
      <div className="list-component">
        <div className="list">
          <div className="list-details">
            <div className="name">{user.name}</div>
            <div className="email">{user.email}</div>
            <div className="role">{user.role}</div>
          </div>
          <div className="function-buttons">
            <div className="edit">
              <BiEditAlt />
            </div>
            <div className="delete">
              <AiOutlineDelete />
            </div>
          </div>
        </div>
      </div>
      {/* <Pagination itemsPerPage={10} pageCount={pageCount} users={users} /> */}
    </>
  );
}

export default List;
