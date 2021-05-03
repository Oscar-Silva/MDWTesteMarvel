import { all, fork } from "redux-saga/effects";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import comicsReducer from "./comics";
import comicsSaga from "./comics/sagas";
import charactersReducer from "./characters";
import charactersSaga from "./characters/sagas";
import seriesReducer from "./series";
import seriesSaga from "./series/sagas";
import sideBarPinReducer from "./sideBarPin";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([fork(charactersSaga), fork(seriesSaga), fork(comicsSaga)]);
}

const store = configureStore({
  reducer: {
    charactersReducer,
    sideBarPinReducer,
    seriesReducer,
    comicsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
