import React from "react";
import { Capitalize } from "../Strings";

export default function TextInput({ name, dataKey, setField }) {
  const enterPressed = (event) => {
    if (event.key === "Enter") {
      setField(dataKey, event.target.value);
    }
  };

  return (
    <div>
      {Capitalize(name) + ": "}
      <input type="text" onKeyDown={enterPressed} />
    </div>
  );
}
