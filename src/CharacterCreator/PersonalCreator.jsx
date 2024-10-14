import React from "react";
import "../styles/personalCreator.scss";
import TextInput from "../Views/TextInput";
import DropdownSelector from "../Views/DropdownSelector";
import {
  GenderStrings,
  KingdomStrings,
  RaceStrings,
  ReligionStrings,
} from "../Tools/Strings";
import Button from "react-bootstrap/Button";
import { makeMutableCopy } from "../Tools/ReusableFunctions";
import { personalStyle } from "../Tools/StyleNames";

export default function PersonalCreator({
  character,
  submitPersonalData,
  changeStep,
}) {
  const personalData = character.personalDetails;

  const setField = (key, stringData) => {
    let newPD = makeMutableCopy(personalData);
    newPD[key] = stringData;
    submitPersonalData(newPD, "personalDetails", "plus");
  };

  const textDataField = (name, dataKey) => {
    const value = personalData[dataKey] ? personalData[dataKey] : "";
    return (
      <TextInput
        name={name}
        dataKey={dataKey}
        value={value}
        setField={setField}
        style={personalStyle.form}
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

  const distinctiveFeatureDataField = () => {
    return (
      <TextInput
        name="Distinctive Features (separated by commas)"
        dataKey="distinctiveFeatures"
        value={personalData.distinctiveFeatures.toString()}
        setField={(key, value) => {
          const features = value.split(",");
          setField(key, features);
        }}
        style={personalStyle.distinctive}
      />
    );
  };

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
        setField={setField}
        value={personalData.kingdomReputations[kingdom]}
        rep={true}
      />
    );
  };

  return (
    <div style={{ padding: "30px" }}>
      <div style={{ display: "flex", textAlign: "left", width: "100%" }}>
        <div style={{ width: "100%" }}>
          <table style={{ width: "100%", marginBottom: "20px" }}>
            <tbody>
              <tr>
                <td>{textDataField("Name", "characterName")}</td>
                <td>{dropdownDataField("Race", "race", RaceStrings)}</td>
                <td>{dropdownDataField("Gender", "gender", GenderStrings)}</td>
              </tr>
              <tr>
                <td>
                  {textDataField(
                    personalData.characterName
                      ? `${personalData.characterName}'s profession`
                      : "Character's profession",
                    "startingProfession"
                  )}
                </td>
                <td>
                  {dropdownDataField(
                    "Birth Kingdom",
                    "kingdomBirth",
                    KingdomStrings
                  )}
                </td>
                <td>
                  {dropdownDataField("Religion", "religion", ReligionStrings)}
                </td>
              </tr>
              <tr>
                <td>{textDataField("Age", "age")}</td>
                <td>
                  {dropdownDataField(
                    "Kingdom Devotion",
                    "kingdomLoyalty",
                    KingdomStrings
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          {distinctiveFeatureDataField()}
        </div>
      </div>
      <div>
        Set your character's starting reputation with each political group
      </div>
      <table style={{ width: "100%", marginBottom: "20px" }}>
        <tbody>
          <tr>
            {Object.keys(KingdomStrings).map((kingdom) => (
              <td key={kingdom}>
                <div>{KingdomStrings[kingdom]}</div>
                {startingLoyalty(kingdom)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {!Object.values(personalData).includes("") && (
        <Button
          onClick={() => {
            changeStep("forward");
          }}
          style={{
            backgroundColor: "white",
            color: "#4a2c2a",
            borderColor: "#4a2c2a",
            borderWidth: "2px",
            fontWeight: "bold",
          }}
        >
          Next
        </Button>
      )}
    </div>
  );
}
