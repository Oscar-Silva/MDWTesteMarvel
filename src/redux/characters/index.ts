import { createReducer } from "@reduxjs/toolkit";
import {
  fetchCharactersData,
  fetchCharactersDataFail,
  fetchCharactersDataSuccess,
} from "./actions";
import CharactersState from "./types";

const initialState: CharactersState = {
  fetchStatus: {
    error: false,
    loading: false,
  },
  list: [],
};

const charactersReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(fetchCharactersData, (state, action) => {
      state.fetchStatus.error = false;
      state.fetchStatus.loading = true;
    })
    .addCase(fetchCharactersDataSuccess, (state, action) => {
      state.fetchStatus.error = false;
      state.fetchStatus.loading = false;
    })
    .addCase(fetchCharactersDataFail, (state, action) => {
      state.fetchStatus.error = true;
      state.fetchStatus.loading = false;
    })
);

export default charactersReducer;
