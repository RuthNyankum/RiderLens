import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import productsReducer from "../features/products/productSlice";
import recentlyViewedReducer from "../features/products/recentlyViewedSlice";
import uiReducer from "../features/products/uiSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    recentlyViewed: recentlyViewedReducer,
    ui: uiReducer,
  },
});
