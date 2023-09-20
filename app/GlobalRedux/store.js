"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
