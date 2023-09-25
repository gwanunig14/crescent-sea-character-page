// src/reducers/currentCharacterReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { localStorageCharacterMiddleware } from "./localStorage";

const initialState = {}; // Initial state for currentCharacter

const currentCharacterSlice = createSlice({
  name: "currentCharacter",
  initialState,
  reducers: {
    setCurrentCharacter: (state, action) => {
      // This reducer sets the current character to the payload
      return action.payload;
    },
  },
  middleware: [localStorageCharacterMiddleware],
});

export const { setCurrentCharacter } = currentCharacterSlice.actions;
export default currentCharacterSlice.reducer;
