// localStorageMiddleware.js

import { emptyArray } from "../Tools/ReusableFunctions";

export const localStorageCharacterMiddleware =
  (store) => (next) => (action) => {
    // Call the next middleware or reducer in the chain
    const result = next(action);

    // Save the state to localStorage whenever the state changes
    const currentState = store.getState();
    localStorage.setItem(
      "currentCharacter",
      JSON.stringify(currentState.currentCharacter)
    );

    return result;
  };

// localStorageMiddleware.js

export const localStoragePlayerMiddleware = (store) => (next) => (action) => {
  // Call the next middleware or reducer in the chain
  const result = next(action);

  // Save the state to localStorage whenever the state changes
  const currentState = store.getState();
  localStorage.setItem(
    "currentPlayer",
    JSON.stringify(currentState.currentPlayer)
  );

  return result;
};
