import React from "react";

export default function TextInput({ name, dataKey, setField }) {
  const enterPressed = (event) => {
    if (event.key === "Enter") {
      setField(dataKey, event.target.value);
    }
  };

  return (
    <div>
      {name + ": "}
      <input type="text" onKeyDown={enterPressed} />
    </div>
  );
}
