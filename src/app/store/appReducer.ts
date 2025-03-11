import { combineReducers } from "@reduxjs/toolkit";
import { tasksSlice } from "./tasksSlice";

export const appReducer = combineReducers({
  [tasksSlice.reducerPath]: tasksSlice.reducer,
});
