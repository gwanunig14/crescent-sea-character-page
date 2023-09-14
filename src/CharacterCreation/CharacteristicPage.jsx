import React, { useState } from "react";
import { Strings } from "../Strings";
import {
  newDwarfCharacteristics,
  newElfCharacteristics,
  newHumanCharacteristics,
} from "../DataTemplates/Characteristics";
import CountUp from "../Views/CountUp";
import { Button } from "react-bootstrap";

export default function CharacteristicPage({ race, submitCharacteristicData }) {
  // Initialize characteristics based on race
  let characteristics = newHumanCharacteristics;
  switch (race) {
    case Strings.DWARF:
      characteristics = newDwarfCharacteristics;
      break;
    case Strings.ELF:
      characteristics = newElfCharacteristics;
      break;
    default:
      break;
  }

  const [characteristicData, setCharacteristicData] = useState(characteristics);

  // Update the field in characteristicData
  function setField(key, stringData) {
    setCharacteristicData((prevState) => ({
      ...prevState,
      [key]: Number(stringData),
    }));
  }

  // Calculate remaining points
  const getCount = () => {
    let statCount = Object.values(characteristicData).reduce(
      (acc, v) => acc + v,
      0
    );
    return 108 - statCount;
  };

  // Check if a button should be disabled
  const isDisabled = (current, func, max) => {
    if (func === "plus") {
      return getCount() === 0 || current === max;
    } else {
      return current === 0;
    }
  };

  return (
    <div>
      <div>
        {/* Render CountUp components */}
        {Object.keys(characteristicData).map((key) => (
          <CountUp
            key={key}
            fieldName={key}
            dataKey={key}
            count={characteristicData[key]}
            returnText={setField}
            plusDisabled={isDisabled(characteristicData[key], "plus", 20)}
            minusDisabled={isDisabled(characteristicData[key], "minus")}
          />
        ))}
      </div>
      <div>{getCount()}</div>
      {getCount() === 0 && (
        <Button
          onClick={() =>
            submitCharacteristicData(
              characteristicData,
              "characteristics",
              "plus"
            )
          }
        >
          Next
        </Button>
      )}
      <Button
        onClick={() =>
          submitCharacteristicData(
            characteristicData,
            "personalDetails",
            "minus"
          )
        }
      >
        Back
      </Button>
    </div>
  );
}
