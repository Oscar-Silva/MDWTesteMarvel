import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  visible: boolean;
}

const initialState: InitialState = {
  visible: true,
};

const sideBarPinReducer = createSlice({
  name: "sideBarPinReducer",
  initialState,
  reducers: {
    showSideBar(state) {
      state.visible = true;
    },
    hideSideBar(state) {
      state.visible = false;
    },
  },
});

export const { showSideBar, hideSideBar } = sideBarPinReducer.actions;
export default sideBarPinReducer.reducer;
