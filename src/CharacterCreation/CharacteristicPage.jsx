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

  return (
    <div>
      <div>
        <CountUp
          fieldName="STR"
          dataKey="strength"
          count={characteristicData.strength}
          returnText={setField}
        />
        <CountUp
          fieldName="CON"
          dataKey="constitution"
          count={characteristicData.constitution}
          returnText={setField}
        />
        <CountUp
          fieldName="SIZ"
          dataKey="size"
          count={characteristicData.size}
          returnText={setField}
        />
        <CountUp
          fieldName="INT"
          dataKey="intelligence"
          count={characteristicData.intelligence}
          returnText={setField}
        />
        <CountUp
          fieldName="POW"
          dataKey="power"
          count={characteristicData.power}
          returnText={setField}
        />
        <CountUp
          fieldName="DEX"
          dataKey="dexterity"
          count={characteristicData.dexterity}
          returnText={setField}
        />
        <CountUp
          fieldName="CHA"
          dataKey="charisma"
          count={characteristicData.charisma}
          returnText={setField}
        />
        <CountUp
          fieldName="EDU"
          dataKey="education"
          count={characteristicData.education}
          returnText={setField}
        />
      </div>
      <div>{getCount()}</div>
      {getCount() === 0 && (
        <Button
          onClick={() =>
            submitCharacteristicData(characteristicData, "characteristics")
          }
        >
          Submit
        </Button>
      )}
    </div>
  );
}
