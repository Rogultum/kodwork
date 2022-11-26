import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./slices/favouritesSlicer";

export const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
});
