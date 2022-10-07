import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./slices/favoriteSlice";

import { setLocalStorage } from "../untils/localStorage";

export const store = configureStore({
  reducer: {
    favorite: favoriteSlice
  }
})

//подписываемся на изменения store
store.subscribe(() => {
  // console.log(store.getState().favorite.favoritesArr)
  setLocalStorage("store", store.getState().favorite.favoritesArr)
})