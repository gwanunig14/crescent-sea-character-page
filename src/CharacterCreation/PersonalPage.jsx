import React, { useState } from "react";
import { newCharacterPersonalDetails } from "../DataTemplates/PersonalData";
import TextInput from "../Views/TextInput";
import DropdownSelector from "../Views/DropdownSelector";
import {
  GenderStrings,
  KingdomStrings,
  RaceStrings,
  ReligionStrings,
} from "../Strings";
import { Button } from "react-bootstrap";

export default function PersonalPage({ submitPersonalData }) {
  const [personalData, setPersonalData] = useState(newCharacterPersonalDetails);

  function setField(key, stringData) {
    setPersonalData((prevState) => ({
      ...prevState,
      [key]: stringData,
    }));
  }

  const textDataField = (name, dataKey) => (
    <TextInput name={name} dataKey={dataKey} setField={setField} />
  );

  const dropdownDataField = (name, dataKey, optionList) => (
    <DropdownSelector
      name={name}
      dataKey={dataKey}
      optionList={optionList}
      setField={setField}
      value={personalData[dataKey]}
    />
  );

  const distinctiveFeatureDataField = () => (
    <TextInput
      name="Distinctive Features (separated by commas)"
      dataKey="distinctiveFeatures"
      setField={(value) => {
        const features = value.split(",");
        setField("distinctiveFeatures", features);
      }}
    />
  );

  const startingLoyalty = (kingdom) => (
    <DropdownSelector
      name="reputation"
      dataKey="kingdomReputations"
      optionList={["friendly", "none", "aware", "dislike"]}
      setField={(key, stringData) => {
        setPersonalData((prevState) => ({
          ...prevState,
          kingdomReputations: {
            ...prevState.kingdomReputations,
            [kingdom]: stringData,
          },
        }));
      }}
      value={personalData.kingdomReputations[kingdom]}
    />
  );

  const arrayMap = (array) => Object.keys(array).map((k) => array[k]);

  return (
    <div>
      {textDataField("Name", "characterName")}
      {dropdownDataField("Gender", "gender", arrayMap(GenderStrings))}
      {dropdownDataField("Race", "race", arrayMap(RaceStrings))}
      {dropdownDataField(
        "Birth Kingdom",
        "kingdomBirth",
        arrayMap(KingdomStrings)
      )}
      {textDataField("Height in centimeters", "height")}
      {textDataField("Weight in pounds", "weight")}
      {textDataField(
        personalData.characterName + "'s profession",
        "startingProfession"
      )}
      {dropdownDataField("Religion", "religion", arrayMap(ReligionStrings))}
      {distinctiveFeatureDataField()}
      {textDataField("Age", "age")}
      {dropdownDataField(
        "Kingdom Devotion",
        "kingdomLoyalty",
        arrayMap(KingdomStrings)
      )}
      <div>
        <div>Set your character's starting Reputation</div>
        {Object.keys(KingdomStrings).map((k) => (
          <div key={k}>
            <div>{KingdomStrings[k]}</div>
            {startingLoyalty(KingdomStrings[k])}
          </div>
        ))}
        <Button
          onClick={() => submitPersonalData(personalData, "personalDetails", 'plus')}
        >
          Next
        </Button>
        <Button
          onClick={() => submitPersonalData(personalData, "personalDetails", 'minus')}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
