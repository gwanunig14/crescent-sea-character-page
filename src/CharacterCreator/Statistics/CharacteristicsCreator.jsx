import React from "react";

import { makeMutableCopy } from "../../Tools/ReusableFunctions";
import { CharacteristicCountUp } from "../../Views/CountUp";
import "../../styles/characteristicCreator.scss";

export default function CharacteristicsCreator({
  character,
  submitCharacteristicData,
  isDisabled,
}) {
  const characteristicPointCount = 106;
  const characteristicData = character.characteristics;

  // Update the field in characteristicData
  const setCharacteristics = (key, stringData) => {
    const newCD = makeMutableCopy(characteristicData);
    newCD[key] = Number(stringData);
    submitCharacteristicData(
      newCD,
      getCharacteristicsCount(),
      "characteristics"
    );
  };

  // Calculate remaining points
  const getCharacteristicsCount = () => {
    const statCount = Object.values(characteristicData).reduce(
      (acc, v) => acc + v,
      0
    );
    return characteristicPointCount - statCount;
  };

  const renderCharacteristicCountUps = () => (
    <tr>
      {Object.keys(characteristicData).map((key) => (
        <CharacteristicCountUp
          key={key}
          fieldName={key}
          dataKey={key}
          count={characteristicData[key]}
          returnText={setCharacteristics}
          plusDisabled={isDisabled(
            characteristicData[key],
            "plus",
            getCharacteristicsCount(),
            20
          )}
          minusDisabled={isDisabled(
            characteristicData[key],
            "minus",
            getCharacteristicsCount()
          )}
        />
      ))}
    </tr>
  );

  const capitalizeEachWord = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div style={{ marginTop: 50 }}>
      <div className="tattered-banner">
        {capitalizeEachWord(
          `${getCharacteristicsCount()} characteristic points remaining`
        )}
      </div>
      <table style={{ width: "100%" }}>
        <tbody>{renderCharacteristicCountUps()}</tbody>
      </table>
    </div>
  );
}
