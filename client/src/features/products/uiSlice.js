import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  announcement: "",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setAnnouncement: (state, action) => {
      state.announcement = action.payload;
    },
    clearAnnouncement: (state) => {
      state.announcement = "";
    },
  },
});

export const { setAnnouncement, clearAnnouncement } = uiSlice.actions;
export default uiSlice.reducer;
