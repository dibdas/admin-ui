import React, { useState } from "react";
import "./Header.scss";

function Header(props) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="header">
      <div className="headings-checkbox">
        <div className="checkbox">
          <input type="checkbox" />
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
