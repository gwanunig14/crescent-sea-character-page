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

    if (strengthAndSizeCombo > 152) {
      return "9D6";
    } else if (strengthAndSizeCombo > 136) {
      return "8D6";
    } else if (strengthAndSizeCombo > 120) {
      return "7D6";
    } else if (strengthAndSizeCombo > 104) {
      return "6D6";
    } else if (strengthAndSizeCombo > 88) {
      return "5D6";
    } else if (strengthAndSizeCombo > 72) {
      return "4D6";
    } else if (strengthAndSizeCombo > 56) {
      return "3D6";
    } else if (strengthAndSizeCombo > 40) {
      return "2D6";
    } else if (strengthAndSizeCombo > 32) {
      return "1D6";
    } else if (strengthAndSizeCombo > 25) {
      return "1D4";
    } else if (strengthAndSizeCombo > 16) {
      return "None";
    } else if (strengthAndSizeCombo > 12) {
      return "-1D4";
    } else {
      return "-1D6";
    }
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
