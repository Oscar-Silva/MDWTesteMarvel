import { all, fork } from "redux-saga/effects";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import charactersReducer from "./characters";
import seriesReducer from "./series";
import charactersSaga from "./characters/sagas";
import sideBarPinReducer from "./sideBarPin";
import seriesSaga from "./series/sagas";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([fork(charactersSaga), fork(seriesSaga)]);
}

const store = configureStore({
  reducer: {
    charactersReducer,
    sideBarPinReducer,
    seriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
