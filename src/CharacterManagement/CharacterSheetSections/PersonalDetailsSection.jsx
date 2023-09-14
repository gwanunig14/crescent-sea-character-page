import React from "react";
import {
  GenderStrings,
  KingdomStrings,
  RaceStrings,
  WealthStrings,
  ReligionStrings,
} from "../../Strings";

function PersonalDetailsSection({ personalData }) {
  const {
    race,
    gender,
    kingdomBirth,
    height,
    weight,
    startingProfession,
    wealth,
    religion,
    distinctiveFeatures,
    age,
  } = personalData;

  return (
    <div>
      <div>{"Race: " + RaceStrings[race]}</div>
      <div>{"Gender: " + GenderStrings[gender]}</div>
      <div>{"Kingdom: " + KingdomStrings[kingdomBirth]}</div>
      <div>{"Height: " + height}</div>
      <div>{"Weight: " + weight}</div>
      <div>{"Profession: " + startingProfession}</div>
      <div>{"Wealth: " + WealthStrings[wealth]}</div>
      <div>{"Religion: " + ReligionStrings[religion]}</div>
      <div>
        {"Distinctive Features: " + distinctiveFeatures.map((f) => f + ", ")}
      </div>
      <div>{"Age: " + age}</div>
    </div>
  );
}

export default PersonalDetailsSection;
