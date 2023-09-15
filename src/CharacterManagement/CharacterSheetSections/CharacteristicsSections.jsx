import React from "react";
import Button from "react-bootstrap/Button";
import { characterSheetStyleNames } from "../../Tools/StyleNames";

function CharacteristicsSection({
  characteristics,
  postGameCheck,
  drinks,
  confirmation,
}) {
  const calculateEffortRoll = (stat) => stat * 5;
  const successfulTest = (characteristic) => postGameCheck(characteristic);

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

  const renderCharacteristic = (name, statName, rollType) => (
    <tr>
      <td>{name}</td>
      <td>{characteristics[statName] - drinks}</td>
      <td>{`${rollType} Roll ${calculateEffortRoll(
        statName === "size"
          ? characteristics[statName]
          : characteristics[statName] - drinks
      )}%`}</td>
      <td>
        {!confirmation && (
          <Button onClick={() => successfulTest(statName)}>success</Button>
        )}
      </td>
    </tr>
  );

  return (
    <table style={{ width: "100%" }}>
      <tbody>
        {renderCharacteristic("STR", "strength", "Effort")}
        {renderCharacteristic("CON", "constitution", "Stamina")}
        <tr>
          <td colSpan={1}>SIZ</td>
          <td>{characteristics.size}</td>
          <td>Damage Modifier</td>
          <td>{damageModifier()}</td>
        </tr>
        {renderCharacteristic("INT", "intelligence", "Idea")}
        {renderCharacteristic("POW", "power", "Luck")}
        {renderCharacteristic("DEX", "dexterity", "Agility")}
        {renderCharacteristic("CHA", "charisma", "Charm")}
        {renderCharacteristic("EDU", "education", "Knowledge")}
      </tbody>
    </table>
  );
}

export default CharacteristicsSection;
