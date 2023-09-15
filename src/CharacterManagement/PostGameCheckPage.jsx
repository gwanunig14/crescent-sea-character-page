import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { Strings } from "../Strings";
import { upDateCharacter } from "../reducers/characterReducer";
import { setCurrentCharacter } from "../reducers/currentCharacterReducer";
import {
  digIn,
  makeMutableCopy,
  generalCheck,
  updateObjectAtPath,
} from "../Tools/ReusableFunctions";

function PostGameCheckPage() {
  // TODO if characteristic increase would increase a relient stat, update that stat as well
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const character = useSelector((state) => state.currentCharacter);
  const characters = useSelector((state) => state.characters);
  const [statsToCheck, setStatsToCheck] = useState(state?.checks);
  const [statCheck, setStatCheck] = useState(statsToCheck[0]);

  if (!statCheck) {
    return (
      <div>
        <Button onClick={backHome}>Wrap it up</Button>
      </div>
    );
  }

  const statName = digIn(Strings, statCheck).object;
  const pathAndObject = digIn(character, statCheck);

  let rollGoal = generalCheck(pathAndObject.object);
  let increaseInstruction = "";
  let increases = [];

  if (pathAndObject.path.includes("characteristics")) {
    increaseInstruction =
      "roll a d6. If it's a 4 or less, click 1. If it's a 5 or 6, click 2";
    increases = [0, 1, 2];
    rollGoal = rollGoal * 5 + 1;
  } else {
    increaseInstruction =
      "either roll a d6 and click the result or don't risk it and click 4.";
    increases = [0, 1, 2, 3, 4, 5, 6];
    rollGoal = rollGoal + 1;
  }

  function increaseStat(increase) {
    if (increase !== 0) {
      const newStat = generalCheck(pathAndObject.object) + increase;
      let updatedCharacter = updateObjectAtPath(
        makeMutableCopy(character),
        pathAndObject.path,
        newStat
      );
      dispatch(
        upDateCharacter({
          characterIndex: characters.indexOf(character),
          character: updatedCharacter,
        })
      );
      dispatch(setCurrentCharacter(updatedCharacter));
    }
    statsToCheck.shift();
    const newSTC = statsToCheck;
    setStatsToCheck(newSTC);
    setStatCheck(newSTC[0]);
  }

  function backHome() {
    navigate("/home-page");
  }

  return (
    <div>
      <div>{`Congrats on your successful ${statName} check!`}</div>
      <div>{`To increase this statistic you need to roll a ${rollGoal} or higher.`}</div>
      <div>{`If your roll failed click 0. If your roll succeeded, ${increaseInstruction}`}</div>
      {increases.map((increase) => (
        <Button onClick={() => increaseStat(increase)}>{increase}</Button>
      ))}
    </div>
  );
}

export default PostGameCheckPage;
