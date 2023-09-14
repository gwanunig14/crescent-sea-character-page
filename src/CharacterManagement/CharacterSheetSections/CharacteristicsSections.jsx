import React from "react";
import { Button } from "react-bootstrap";

function CharacteristicsSection({ characteristics, postGameCheck }) {
  const calculateEffortRoll = (stat) => stat * 5;
  const successfulTest = (characteristic) =>
    postGameCheck("characteristics", characteristic);

  const damageModifier = () => {
    const strengthAndSizeCombo =
      characteristics.strength + characteristics.size;

    const damageModifiers = [
      { condition: strengthAndSizeCombo > 152, value: "9D6" },
      { condition: strengthAndSizeCombo > 136, value: "8D6" },
      { condition: strengthAndSizeCombo > 120, value: "7D6" },
      { condition: strengthAndSizeCombo > 104, value: "6D6" },
      { condition: strengthAndSizeCombo > 88, value: "5D6" },
      { condition: strengthAndSizeCombo > 72, value: "4D6" },
      { condition: strengthAndSizeCombo > 56, value: "3D6" },
      { condition: strengthAndSizeCombo > 40, value: "2D6" },
      { condition: strengthAndSizeCombo > 32, value: "1D6" },
      { condition: strengthAndSizeCombo > 25, value: "1D4" },
      { condition: strengthAndSizeCombo > 16, value: "None" },
      { condition: strengthAndSizeCombo > 12, value: "-1D4" },
    ];

    const result = damageModifiers.find((modifier) => modifier.condition);

    return result ? result.value : "-1D6";
  };

  const renderCharacteristic = (name, statName) => (
    <div>
      <div>{`${name}: ${characteristics[statName]}`}</div>
      <div>{`${name} Roll ${calculateEffortRoll(
        characteristics[statName]
      )}%`}</div>
      <Button onClick={() => successfulTest(statName)}>Successful Test</Button>
    </div>
  );

  return (
    <div>
      {renderCharacteristic("STR", "strength")}
      {renderCharacteristic("CON", "constitution")}
      <div>
        <div>{`SIZ: ${characteristics.size}`}</div>
        <div>{`DMG Mod ${damageModifier()}`}</div>
      </div>
      {renderCharacteristic("INT", "intelligence")}
      {renderCharacteristic("POW", "power")}
      {renderCharacteristic("DEX", "dexterity")}
      {renderCharacteristic("CHA", "charisma")}
      {renderCharacteristic("EDU", "education")}
    </div>
  );
}

export default CharacteristicsSection;
