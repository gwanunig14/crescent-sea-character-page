import React, { useState } from "react";
import PersonalDetailsSection from "./CharacterSheetSections/PersonalDetailsSection";
import CharacteristicsSection from "./CharacterSheetSections/CharacteristicsSections";

function CharacterSheet(character) {
  return (
    <div>
      <div>{character.personalDetails.characterName}</div>
      <div>
        Personal
        {PersonalDetailsSection(character.personalDetails)}
      </div>
      <div>
        Characteristics
        {CharacteristicsSection(character.characteristics)}
      </div>
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
