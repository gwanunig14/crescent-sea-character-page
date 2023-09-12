import React from "react";
import { Capitalize } from "../Strings";
import { Button } from "react-bootstrap";

export default function CountUp({ fieldName, dataKey, count, returnText }) {
  const pressed = (func) => {
    var newNumber = func === "plus" ? count + 1 : count - 1;
    returnText(dataKey, newNumber);
  };

  return (
    <div>
      {Capitalize(fieldName) + ": " + count}
      <Button onClick={() => pressed("minus")}>-</Button>
      <Button onClick={() => pressed("plus")}>+</Button>
    </div>
  );
}
