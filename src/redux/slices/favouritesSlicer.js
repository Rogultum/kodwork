import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
enableMapSet();

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    value: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.value.push(action.payload);
    },
    unFavourite: (state, action, index) => {
      state.value.splice(action.payload, 1);
    },
    deleteAll: (state, action) => {
      state.value = [];
    },
  },
});

export const { addFavourite, unFavourite, deleteAll } = favouritesSlice.actions;

export default favouritesSlice.reducer;
