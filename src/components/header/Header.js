import React, { useState } from "react";
import "./Header.scss";

function Header({ onSelectCheckBox, pageNumber }) {
  console.log(pageNumber);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="header">
      <div className="headings-checkbox">
        <div className="checkbox">
          <input type="checkbox" onChange={() => onSelectCheckBox(true)} />
        </div>
        <div className="headings">
          <div className="name">Name</div>
          <div className="email">Email</div>
          <div className="role">Role</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
