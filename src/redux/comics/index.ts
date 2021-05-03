import { createReducer } from "@reduxjs/toolkit";
import {
  fetchComicsData,
  fetchComicsDataFail,
  fetchComicsDataSuccess,
} from "./actions";
import ComicsState from "./types";

const initialState: ComicsState = {
  fetchStatus: {
    error: false,
    loading: false,
  },
  list: [],
};

const comicsReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(fetchComicsData, (state, action) => {
      state.fetchStatus.error = false;
      state.fetchStatus.loading = true;
    })
    .addCase(fetchComicsDataSuccess, (state, action) => {
      state.list = action.payload;
      state.fetchStatus.error = false;
      state.fetchStatus.loading = false;
    })
    .addCase(fetchComicsDataFail, (state, action) => {
      state.fetchStatus.error = true;
      state.fetchStatus.loading = false;
    })
);

export default comicsReducer;
