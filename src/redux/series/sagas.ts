import { SagaIterator } from "@redux-saga/core";
import { put, takeLatest, call, SagaReturnType } from "redux-saga/effects";
import { Series } from "../../models/series";

import requestSeries from "../../services/api/series/requestSeries";
import {
  fetchSeriesDataFail,
  fetchSeriesDataSuccess,
  fetchSeriesData,
} from "./actions";

export function* fetchSeries(): SagaIterator {
  try {
    const series: Series[] = yield call(requestSeries);
    yield put(fetchSeriesDataSuccess(series));
  } catch (err) {
    yield put(fetchSeriesDataFail());
  }
}

export default function* seriesSaga() {
  yield takeLatest(fetchSeriesData, fetchSeries);
}
