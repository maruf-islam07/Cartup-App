import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [],
};

const wishlistSlice = createSlice({
  name: wishlist,
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = action.payload;
      const exists = state.wishlist.find((i) => i.id === item.id);

      if (!exists) {
        state.wishlist.push(item);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});
