import React from "react";
import Button from "react-bootstrap/Button";
import { GetDamageModifier } from "../../Tools/ReusableFunctions";

function CharacteristicsSection({
  characteristics,
  postGameCheck,
  drinks,
  confirmation,
}) {
  const calculateEffortRoll = (stat) => stat * 5;
  const successfulTest = (characteristic) => postGameCheck(characteristic);

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
          <td style={{ paddingLeft: "8px" }}>
            {GetDamageModifier(characteristics)}
          </td>
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
