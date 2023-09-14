// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../reducers/characterReducer"; // Create your reducers in this file
import playerReducer from "../reducers/playerReducer";
import currentPlayerReducer from "../reducers/currentPlayerReducer";
import currentCharacterReducer from "../reducers/currentCharacterReducer";

const store = configureStore({
  reducer: {
    characters: characterReducer, // Pass in your root reducer
    currentCharacter: currentCharacterReducer,
    currentPlayer: currentPlayerReducer,
    players: playerReducer,
  },
});

export default store;
