// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./reducers"; // Create your reducers in this file

const store = configureStore({
  reducer: {
    characters: characterReducer, // Pass in your root reducer
  },
});

export default store;
