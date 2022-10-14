import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./slices/favoriteSlice";

import { setLocalStorage } from "../untils/localStorage";

export const store = configureStore({
  reducer: {
    favorite: favoriteSlice
  }
})

store.subscribe(() => {
  setLocalStorage("store", store.getState().favorite.favoritesArr)
})