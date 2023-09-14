import React, { useState } from "react";
import {
  GenderStrings,
  KingdomStrings,
  RaceStrings,
  WealthStrings,
  ReligionStrings,
} from "../../Strings";

function PersonalDetailsSection(personalData) {
  return (
    <div>
      <div>{"Race: " + RaceStrings[personalData.race]}</div>
      <div>{"Gender: " + GenderStrings[personalData.gender]}</div>
      <div>{"Kingdom: " + KingdomStrings[personalData.kingdomBirth]}</div>
      <div>{"Height: " + personalData.height}</div>
      <div>{"Weight: " + personalData.weight}</div>
      <div>{"Profession: " + personalData.startingProfession}</div>
      <div>{"Wealth: " + WealthStrings[personalData.wealth]}</div>
      <div>{"Religion: " + ReligionStrings[personalData.religion]}</div>
      <div>
        {"Distinctive Features: " +
          personalData.distinctiveFeatures.map((f) => f + ", ")}
      </div>
      <div>{"Age: " + personalData.age}</div>
    </div>
  );
}

export default PersonalDetailsSection;
