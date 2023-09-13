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

  function setField(key, stringData) {
    setCharacteristicData((prevState) => ({
      ...prevState,
      [key]: Number(stringData),
    }));
  }

  const getCount = () => {
    let statCount = 0;
    Object.values(characteristicData).forEach((v) => {
      statCount += v;
    });
    return 108 - statCount;
  };

  const disabled = (current, func, max) => {
    if (func === "plus") {
      if (getCount() === 0) {
        return true;
      } else if (max === current) {
        return true;
      }
    } else {
      if (current === 0) {
        return true;
      }
    }

    return false;
  };

  return (
    <div>
      <div>
        <CountUp
          fieldName="STR"
          dataKey="strength"
          count={characteristicData.strength}
          returnText={setField}
          plusDisabled={disabled(characteristicData.strength, "plus", 20)}
          minusDisabled={disabled(characteristicData.strength, "minus")}
        />
        <CountUp
          fieldName="CON"
          dataKey="constitution"
          count={characteristicData.constitution}
          returnText={setField}
          plusDisabled={disabled(characteristicData.constitution, "plus", 20)}
          minusDisabled={disabled(characteristicData.constitution, "minus")}
        />
        <CountUp
          fieldName="SIZ"
          dataKey="size"
          count={characteristicData.size}
          returnText={setField}
          plusDisabled={disabled(characteristicData.size, "plus", 20)}
          minusDisabled={disabled(characteristicData.size, "minus")}
        />
        <CountUp
          fieldName="INT"
          dataKey="intelligence"
          count={characteristicData.intelligence}
          returnText={setField}
          plusDisabled={disabled(characteristicData.intelligence, "plus", 20)}
          minusDisabled={disabled(characteristicData.intelligence, "minus")}
        />
        <CountUp
          fieldName="POW"
          dataKey="power"
          count={characteristicData.power}
          returnText={setField}
          plusDisabled={disabled(characteristicData.power, "plus", 200)}
          minusDisabled={disabled(characteristicData.power, "minus")}
        />
        <CountUp
          fieldName="DEX"
          dataKey="dexterity"
          count={characteristicData.dexterity}
          returnText={setField}
          plusDisabled={disabled(characteristicData.dexterity, "plus", 20)}
          minusDisabled={disabled(characteristicData.dexterity, "minus")}
        />
        <CountUp
          fieldName="CHA"
          dataKey="charisma"
          count={characteristicData.charisma}
          returnText={setField}
          plusDisabled={disabled(characteristicData.charisma, "plus", 20)}
          minusDisabled={disabled(characteristicData.charisma, "minus")}
        />
        <CountUp
          fieldName="EDU"
          dataKey="education"
          count={characteristicData.education}
          returnText={setField}
          plusDisabled={disabled(characteristicData.education, "plus", 20)}
          minusDisabled={disabled(characteristicData.education, "minus")}
        />
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
