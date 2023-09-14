import React, { useState } from "react";
import {
  GenderStrings,
  KingdomStrings,
  RaceStrings,
  WealthStrings,
  ReligionStrings,
} from "../../Strings";
import Button from "react-bootstrap/Button";

function CharacteristicsSection(characteristics, postGameCheck) {
  const successfulTest = (characteristic) => {
    postGameCheck("characteristics", characteristic);
  };

  const damageModifier = () => {
    const strengthAndSizeCombo =
      characteristics.strength + characteristics.size;

    // Define the conditions and corresponding return values in an array
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

    // Find the first matching condition and return its corresponding value
    const result = damageModifiers.find((modifier) => modifier.condition);

    // If no matching condition is found, default to "-1D6"
    return result ? result.value : "-1D6";
  };

  return (
    <div>
      <div>
        <div>{"STR: " + characteristics.strength}</div>
        <div>{"Effort Roll " + characteristics.strength * 5 + "%"}</div>
        <Button onClick={() => successfulTest("strength")}>
          Successful Test
        </Button>
      </div>
      <div>
        <div>{"CON: " + characteristics.constitution}</div>
        <div>{"Stamina Roll " + characteristics.constitution * 5 + "%"}</div>
        <Button onClick={() => successfulTest("constitution")}>
          Successful Test
        </Button>
      </div>
      <div>
        <div>{"SIZ: " + characteristics.size}</div>
        <div>{"DMG Mod " + damageModifier()}</div>
      </div>
      <div>
        <div>{"INT: " + characteristics.intelligence}</div>
        <div>{"Idea Roll " + characteristics.intelligence * 5 + "%"}</div>
        <Button onClick={() => successfulTest("intelligence")}>
          Successful Test
        </Button>
      </div>
      <div>
        <div>{"POW: " + characteristics.power}</div>
        <div>{"Luck Roll " + characteristics.power * 5 + "%"}</div>
        <Button onClick={() => successfulTest("power")}>Successful Test</Button>
      </div>
      <div>
        <div>{"DEX: " + characteristics.dexterity}</div>
        <div>{"Agility Roll " + characteristics.dexterity * 5 + "%"}</div>
        <Button onClick={() => successfulTest("dexterity")}>
          Successful Test
        </Button>
      </div>
      <div>
        <div>{"CHA: " + characteristics.charisma}</div>
        <div>{"Charm Roll " + characteristics.charisma * 5 + "%"}</div>
        <Button onClick={() => successfulTest("charisma")}>
          Successful Test
        </Button>
      </div>
      <div>
        <div>{"EDU: " + characteristics.education}</div>
        <div>{"Knowledge Roll " + characteristics.education * 5 + "%"}</div>
        <Button onClick={() => successfulTest("education")}>
          Successful Test
        </Button>
      </div>
    </div>
  );
}

export default CharacteristicsSection;
