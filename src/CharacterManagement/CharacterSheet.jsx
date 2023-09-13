import React, { useState } from "react";
import PersonalPage from "./PersonalPage";
import CharacteristicPage from "./CharacteristicPage";
import SkillPage from "./SkillPage";

function CharacterSheet(character) {
  return (
    <div>
      <div>{character.personalData.characterName}</div>
      <div>Personal</div>
      <div>Characteristics</div>
      <div>Hit Points</div>
      <div>Power</div>
      <div>
        Skills
        <div>Communication</div>
        <div>Motor Skills</div>
        <div>Mental</div>
        <div>Perception</div>
        <div>Physical</div>
        <div>Combat</div>
      </div>
      <div>Weapons</div>
      <div>Armor</div>
    </div>
  );
}

export default CharacterSheet;
