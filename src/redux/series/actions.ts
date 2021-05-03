import { createAction } from "@reduxjs/toolkit";
import { Series } from "../../models/series";

export const fetchSeriesData = createAction("@series/fetchData");

export const fetchSeriesDataSuccess = createAction(
  "@series/fetchDataSuccess",
  function prepare(data: Series[]) {
    return {
      payload: data,
    };
  }
);

export const fetchSeriesDataFail = createAction("@series/fetchDataFail");
