// src/reducers/characterReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {}; // Initial state for characters

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacter: (state, action) => {
      state.push(action.payload);
    },
    upDateCharacter: (state, action) => {
      const { characterIndex, character } = action.payload;
      state[characterIndex] = character;
    },
    setCharacters: (state, action) => action.payload,
  },
});

export const { addCharacter, upDateCharacter, setCharacters } =
  characterSlice.actions;
export default characterSlice.reducer;
