import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../components/constants/product.constant";
import {
  DEFAULT_FILTERS,
  DEFAULT_PAGINATION,
  VIEW_MODES,
} from "../../components/constants/productsConfig";

const initialState = {
  products: PRODUCTS,
  filters: DEFAULT_FILTERS,
  viewMode: VIEW_MODES.GRID,
  pagination: DEFAULT_PAGINATION,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.filters.category = action.payload;
      state.pagination.currentPage = 1;
    },
    setPriceRange: (state, action) => {
      state.filters.priceRange = action.payload;
      state.pagination.currentPage = 1;
    },
    toggleFeature: (state, action) => {
      const feature = action.payload;
      const index = state.filters.features.indexOf(feature);

      if (index > -1) {
        state.filters.features.splice(index, 1);
      } else {
        state.filters.features.push(feature);
      }

      state.pagination.currentPage = 1;
    },
    setSortBy: (state, action) => {
      state.filters.sortBy = action.payload;
      state.pagination.currentPage = 1;
    },
    setViewMode: (state, action) => {
      state.viewMode = action.payload;
    },
    setPage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.pagination.itemsPerPage = action.payload;
      state.pagination.currentPage = 1;
    },
  },
});

export const {
  setCategory,
  setPriceRange,
  toggleFeature,
  setSortBy,
  setViewMode,
  setPage,
  setItemsPerPage,
} = productsSlice.actions;

export default productsSlice.reducer;
