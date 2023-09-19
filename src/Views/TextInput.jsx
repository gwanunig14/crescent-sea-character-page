import React, { useState } from "react";
import "../styles/personalCreator.scss";

export default function TextInput({ name, dataKey, value, setField, style }) {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Tab") {
      setField(dataKey, event.target.value);
    }
  };

  const handleFocusChange = (event) => {
    setField(dataKey, event.target.value);
  };

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div className={style}>{`${name}:`}</div>
      <div style={{ width: "100%", marginRight: "20px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          onBlur={handleFocusChange}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}
