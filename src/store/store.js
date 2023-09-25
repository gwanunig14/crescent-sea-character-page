// src/store/store.js
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import characterReducer from "../reducers/characterReducer"; // Create your reducers in this file
import currentPlayerReducer, {
  setCurrentPlayer,
} from "../reducers/currentPlayerReducer";
import currentCharacterReducer, {
  setCurrentCharacter,
} from "../reducers/currentCharacterReducer";
import {
  localStorageCharacterMiddleware,
  localStoragePlayerMiddleware,
} from "../reducers/localStorage";
import { FetchCharacter } from "../FirebaseCommunications";
import { getDatabase, ref, set } from "firebase/database";
import { database } from "../database";

const getPlayerAndCharacter = () => {
  const currentCharacterState = localStorage.getItem("currentCharacter");
  const currentPlayerState = localStorage.getItem("currentPlayer");

  // Parse the state data if it exists
  const parsedCurrentCharacterState = currentCharacterState
    ? JSON.parse(currentCharacterState)
    : null;
  const parsedCurrentPlayerState = currentPlayerState
    ? JSON.parse(currentPlayerState)
    : null;

  return {
    character: parsedCurrentCharacterState,
    player: parsedCurrentPlayerState,
  };
};

const loadStateFromLocalStorage = (store) => {
  // Check if there is existing state data in localStorage
  const playerAndCharacter = getPlayerAndCharacter();

  // Dispatch actions to update your Redux store with the loaded state
  if (playerAndCharacter.character) {
    store.dispatch(setCurrentCharacter(playerAndCharacter.character));
  }

  if (playerAndCharacter.player) {
    store.dispatch(setCurrentPlayer(playerAndCharacter.player));
  }
};

const initializeStateFromDatabase = async (store) => {
  try {
    const playerAndCharacter = getPlayerAndCharacter();
    const fetchedCharacter = await FetchCharacter(
      playerAndCharacter.player,
      playerAndCharacter.character
    ); // Assuming you have a function to fetch characters

    // Dispatch the latest character as the initial state for currentCharacter
    store.dispatch(setCurrentCharacter(fetchedCharacter));
  } catch (error) {
    // Handle any errors that may occur during initialization
    console.error(error);
  }
};

const store = configureStore({
  reducer: {
    characters: characterReducer, // Pass in your root reducer
    currentCharacter: currentCharacterReducer,
    currentPlayer: currentPlayerReducer,
  },
  middleware: [localStorageCharacterMiddleware, localStoragePlayerMiddleware],
});

loadStateFromLocalStorage(store);
initializeStateFromDatabase(store);

export default store;
