import React, { useState } from "react";

export default function TextInput({ name, dataKey, value, setField }) {
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
    <div>
      {name + ": "}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        onBlur={handleFocusChange}
      />
    </div>
  );
}
