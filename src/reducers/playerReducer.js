// src/reducers/playerReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = ["James", "Racheal"]; // Initial state for players

const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addplayer: (state, action) => {
      state.push(action.payload);
    },
    // Add more reducers to handle other actions
  },
});

export const { addplayer } = playerSlice.actions;
export default playerSlice.reducer;
