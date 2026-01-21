import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const recentlyViewedSlice = createSlice({
  name: "recentlyViewed",
  initialState,
  reducers: {
    addToRecentlyViewed: (state, action) => {
      const product = action.payload;
      // Remove if already exists
      state.items = state.items.filter((p) => p.id !== product.id);
      // Add to beginning
      state.items.unshift(product);
      // Keep only last 10
      if (state.items.length > 10) {
        state.items = state.items.slice(0, 10);
      }
    },
    clearRecentlyViewed: (state) => {
      state.items = [];
    },
  },
});

export const { addToRecentlyViewed, clearRecentlyViewed } =
  recentlyViewedSlice.actions;
export default recentlyViewedSlice.reducer;
