// src/reducers/characterReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { TestingCharacter1, TestingCharacter2 } from "../TestingData";

const initialState = [TestingCharacter1, TestingCharacter2]; // Initial state for characters

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
  },
});

export const { addCharacter, upDateCharacter } = characterSlice.actions;
export default characterSlice.reducer;
