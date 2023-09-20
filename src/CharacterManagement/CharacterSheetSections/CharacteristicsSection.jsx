import React from "react";
import Button from "react-bootstrap/Button";

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
    <tr style={{ height: "40px" }}>
      <td style={{ fontWeight: "bold", fontSize: "20px" }}>{`${name}:`}</td>
      <td style={{ paddingLeft: "8px" }}>
        {characteristics[statName] - drinks}
      </td>
      <td style={{ paddingLeft: "15px" }}>{`${rollType} Roll`}</td>{" "}
      <td>
        {`${calculateEffortRoll(
          statName === "size"
            ? characteristics[statName]
            : characteristics[statName] - drinks
        )}
        %`}
      </td>
      <td style={{ paddingLeft: "8px" }}>
        {!confirmation && (
          <Button onClick={() => successfulTest(statName)}>success</Button>
        )}
      </td>
    </tr>
  );

  return (
    <table>
      <tbody>
        {renderCharacteristic("STR", "strength", "Effort")}
        {renderCharacteristic("CON", "constitution", "Stamina")}
        <tr style={{ height: "40px" }}>
          <td style={{ fontWeight: "bold", fontSize: "20px" }} colSpan={1}>
            SIZ:
          </td>
          <td style={{ paddingLeft: "8px" }}>{characteristics.size}</td>
          <td style={{ paddingLeft: "15px" }} colSpan={2}>
            Damage Modifier
          </td>
          <td style={{ paddingLeft: "8px" }}>{damageModifier()}</td>
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
