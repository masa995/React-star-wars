import { createSlice } from "@reduxjs/toolkit";

import { getLocalStorage } from "../../untils/localStorage";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoritesArr: getLocalStorage("store")
  },
  reducers: {
    addFavorite(state, payload) {
      state.favoritesArr.push(payload.payload.obj);
    },
    removeFavorite(state, payload) {

      state.favoritesArr = state.favoritesArr.filter((elem) => {
        return elem.id !== payload.payload.id
      })
    }
  }
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;