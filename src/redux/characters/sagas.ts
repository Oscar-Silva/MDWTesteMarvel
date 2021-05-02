import { SagaIterator } from "@redux-saga/core";
import { put, takeLatest, call, SagaReturnType } from "redux-saga/effects";
import { Character } from "../../models/characters";

import requestCharacters from "../../services/api/characters/requestCharacters";
import {
  fetchCharactersDataFail,
  fetchCharactersDataSuccess,
  fetchCharactersData,
} from "./actions";

export function* fetchCharacters(): SagaIterator {
  try {
    const characters: Character[] = yield call(requestCharacters);
    yield put(fetchCharactersDataSuccess(characters));
  } catch (err) {
    yield put(fetchCharactersDataFail());
  }
}

export default function* charactersSaga() {
  yield takeLatest(fetchCharactersData, fetchCharacters);
}
