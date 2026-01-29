import { all } from "redux-saga/effects";
import movieSagas from "./movie/Sagas";

export function* rootSagas() {
  yield all([...movieSagas]);
}
