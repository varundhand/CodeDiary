"use client";

import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./Features/loading/loadingSlice";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
});
