import { createAction } from "@reduxjs/toolkit";
import { Comic } from "../../models/comics";

export const fetchComicsData = createAction("@comics/fetchData");

export const fetchComicsDataSuccess = createAction(
  "@comics/fetchDataSuccess",
  function prepare(data: Comic[]) {
    return {
      payload: data,
    };
  }
);

export const fetchComicsDataFail = createAction("@comics/fetchDataFail");
