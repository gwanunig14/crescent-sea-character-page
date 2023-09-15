import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { Strings } from "../Strings";
import { upDateCharacter } from "../reducers/characterReducer";
import { setCurrentCharacter } from "../reducers/currentCharacterReducer";

function PostGameCheckPage() {
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

  let rollGoal = pathAndObject.object.general
    ? pathAndObject.object.general
    : pathAndObject.object;
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
      const newStat = pathAndObject.object.general
        ? pathAndObject.object.general + increase
        : pathAndObject.object + increase;
      let updatedCharacter = updateObjectAtPath(
        makeMutable(character),
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

  function digIn(obj, targetKey, currentPath = []) {
    for (const key in obj) {
      if (key === targetKey) {
        return { path: [...currentPath, key], object: obj[key] };
      }

      if (typeof obj[key] === "object") {
        const result = digIn(obj[key], targetKey, [...currentPath, key]);
        if (result.path) {
          return result; // Key found in nested object, return both path and object
        }
      }
    }

    return { path: null, object: null }; // Key not found
  }

  function makeMutable(obj) {
    if (obj === null || typeof obj !== "object") {
      // If the object is a primitive or null, return it as is
      return obj;
    }

    if (Array.isArray(obj)) {
      // If it's an array, create a new array and deep copy its elements
      const newArray = [];
      for (let i = 0; i < obj.length; i++) {
        newArray[i] = makeMutable(obj[i]);
      }
      return newArray;
    }

    // If it's an object, create a new object and deep copy its properties
    const newObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = makeMutable(obj[key]);
      }
    }
    return newObj;
  }

  function updateObjectAtPath(obj, path, newValue) {
    if (!Array.isArray(path) || path.length === 0) {
      return obj; // Invalid path or empty path, return the original object
    }

    const updatedObj = { ...obj };
    let current = updatedObj;

    for (let i = 0; i < path.length - 1; i++) {
      const key = path[i];
      if (typeof current[key] !== "object") {
        // If any intermediate key on the path is not an object, create an empty object
        current[key] = {};
      }
      current = current[key]; // Move to the next level of the object
    }

    const lastKey = path[path.length - 1];
    current[lastKey] = newValue; // Set the new value at the final key on the path

    return updatedObj;
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
