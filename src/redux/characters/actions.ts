import { createAction } from "@reduxjs/toolkit";
import { Character } from "../../models/characters";

export const fetchCharactersData = createAction("@characters/fetchData");

export const fetchCharactersDataSuccess = createAction(
  "@characters/fetchDataSuccess",
  function prepare(data: Character[]) {
    return {
      payload: data,
    };
  }
);

export const fetchCharactersDataFail = createAction(
  "@characters/fetchDataFail"
);
