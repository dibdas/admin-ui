import { logDOM } from "@testing-library/react";
import React, { useState } from "react";

function Checkbox({ userId, onSelect, onSelected }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(event) {
    console.log(event.target.value);
    setIsChecked(!isChecked);
    // console.log(isChecked);
  }
  //   console.log(isChecked);
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        onChange={handleChange}
        value={userId}
        checked={onSelected}
      />
    </div>
  );
}

export default Checkbox;
