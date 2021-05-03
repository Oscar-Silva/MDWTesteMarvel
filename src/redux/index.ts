import { all, fork } from "redux-saga/effects";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import charactersReducer from "./characters";
import charactersSaga from "./characters/sagas";
import sideBarPinReducer from "./sideBarPin";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([fork(charactersSaga)]);
}

const store = configureStore({
  reducer: {
    charactersReducer,
    sideBarPinReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
