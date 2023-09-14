import React from "react";

export default function TextInput({ name, dataKey, setField }) {
  const handleEnterPressed = (event) => {
    if (event.key === "Enter" || event.key === "Tab") {
      setField(dataKey, event.target.value);
    }
  };

  return (
    <div>
      {name + ": "}
      <input type="text" onKeyDown={handleEnterPressed} />
    </div>
  );
}
