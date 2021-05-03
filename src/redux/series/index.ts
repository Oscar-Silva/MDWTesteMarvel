import { createReducer } from "@reduxjs/toolkit";
import {
  fetchSeriesData,
  fetchSeriesDataFail,
  fetchSeriesDataSuccess,
} from "./actions";
import SeriesState from "./types";

const initialState: SeriesState = {
  fetchStatus: {
    error: false,
    loading: false,
  },
  list: [],
};

const seriesReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(fetchSeriesData, (state, action) => {
      state.fetchStatus.error = false;
      state.fetchStatus.loading = true;
    })
    .addCase(fetchSeriesDataSuccess, (state, action) => {
      state.list = action.payload;
      state.fetchStatus.error = false;
      state.fetchStatus.loading = false;
    })
    .addCase(fetchSeriesDataFail, (state, action) => {
      state.fetchStatus.error = true;
      state.fetchStatus.loading = false;
    })
);

export default seriesReducer;
