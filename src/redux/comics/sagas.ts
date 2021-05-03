import { SagaIterator } from "@redux-saga/core";
import { put, takeLatest, call, SagaReturnType } from "redux-saga/effects";
import { Comic } from "../../models/comics";

import requestComics from "../../services/api/comics/requestComics";
import {
  fetchComicsDataFail,
  fetchComicsDataSuccess,
  fetchComicsData,
} from "./actions";

export function* fetchComics(): SagaIterator {
  try {
    const comics: Comic[] = yield call(requestComics);
    yield put(fetchComicsDataSuccess(comics));
  } catch (err) {
    yield put(fetchComicsDataFail());
  }
}

export default function* comicsSaga() {
  yield takeLatest(fetchComicsData, fetchComics);
}
