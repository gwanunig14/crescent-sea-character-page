// src/reducers/currentPlayerReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { localStoragePlayerMiddleware } from "./localStorage";

const initialState = {}; // Initial state for currentPlayer

const currentPlayerSlice = createSlice({
  name: "currentPlayer",
  initialState,
  reducers: {
    setCurrentPlayer: (state, action) => action.payload, // This reducer sets the current player to the payload
  },
  middleware: [localStoragePlayerMiddleware],
});

export const { setCurrentPlayer } = currentPlayerSlice.actions;
export default currentPlayerSlice.reducer;
