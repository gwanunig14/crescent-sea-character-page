import React, { useState } from "react";
import TextInput from "../Views/TextInput";
import DropdownSelector from "../Views/DropdownSelector";
import {
  GenderStrings,
  KingdomStrings,
  RaceStrings,
  ReligionStrings,
} from "../Tools/Strings";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { makeMutableCopy } from "../Tools/ReusableFunctions";

export default function PersonalCreator({ submitPersonalData, changeStep }) {
  const character = useSelector((state) => state.currentCharacter);
  const [personalData, setPersonalData] = useState(character.personalDetails);

  const setField = (key, stringData) => {
    let newPD = makeMutableCopy(personalData);
    newPD[key] = stringData;
    setPersonalData(newPD);
  };

  const textDataField = (name, dataKey) => {
    const value = personalData[dataKey] ? personalData[dataKey] : "";
    return (
      <TextInput
        name={name}
        dataKey={dataKey}
        value={value}
        setField={setField}
      />
    );
  };

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

  const startingLoyalty = (kingdom) => {
    return (
      <DropdownSelector
        name="reputation"
        dataKey="kingdomReputations"
        optionList={{
          friendly: "Friendly",
          none: "None",
          aware: "Aware",
          dislike: "Dislike",
        }}
        setField={(key, stringData) => {
          let newPD = makeMutableCopy(personalData);
          newPD.kingdomReputations[kingdom] = stringData;
          setPersonalData(newPD);
        }}
        value={personalData.kingdomReputations[kingdom]}
        rep={true}
      />
    );
  };

  const renderFields = () => {
    const fieldArray = [
      textDataField("Name", "characterName"),
      dropdownDataField("Race", "race", RaceStrings),
      dropdownDataField("Gender", "gender", GenderStrings),
      dropdownDataField("Birth Kingdom", "kingdomBirth", KingdomStrings),
      textDataField("Height in centimeters", "height"),
      textDataField("Weight in pounds", "weight"),
      textDataField(
        personalData.characterName
          ? `${personalData.characterName}'s profession`
          : "Your character's profession",
        "startingProfession"
      ),
      dropdownDataField("Religion", "religion", ReligionStrings),
      distinctiveFeatureDataField(),
      textDataField("Age", "age"),
      dropdownDataField("Kingdom Devotion", "kingdomLoyalty", KingdomStrings),
    ];

    return fieldArray.map((field, i) => field);
  };

  return (
    <div style={{ padding: "30px" }}>
      <div style={{ display: "flex", textAlign: "left", width: "100%" }}>
        <div style={{ width: "100%" }}>{renderFields()}</div>
      </div>
      <div>
        Set your character's starting reputation with each political group
      </div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            {Object.keys(KingdomStrings).map((kingdom) => (
              <td key={kingdom}>
                <tr>{KingdomStrings[kingdom]}</tr>
                {startingLoyalty(kingdom)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {!Object.values(personalData).includes("") && (
        <Button
          onClick={() => {
            submitPersonalData(personalData, "personalDetails", "plus");
            changeStep("forward");
          }}
        >
          Next
        </Button>
      )}
    </div>
  );
}
