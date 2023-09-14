// src/reducers/characterReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { TestingCharacter1, TestingCharacter2 } from "../TestingData";

const initialState = {
  characters: [TestingCharacter1, TestingCharacter2], // Initial state for characters
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacter: (state, action) => {
      state.characters.push(action.payload);
    },
    // Add more reducers to handle other actions
  },
});

export const { addCharacter } = characterSlice.actions;
export default characterSlice.reducer;
