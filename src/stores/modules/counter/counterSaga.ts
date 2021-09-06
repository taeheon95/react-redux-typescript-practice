import { call, put, takeEvery } from "@redux-saga/core/effects";
import { fetchCount } from "../../../apis/counterAPI";
import {
  decreaseBy,
  decreaseByAsync,
  endAsync,
  increaseBy,
  increaseByAsync,
  startAsync,
} from "./counter";

function* counterAddSync(amount?: number) {
  yield put(startAsync());
  const response: { data: number } = yield call(fetchCount, amount);
  yield put(increaseBy(response.data));
  yield put(endAsync());
}

function* counterSubSync(amount?: number) {
  yield put(startAsync());
  const response: { data: number } = yield call(fetchCount, amount);
  yield put(decreaseBy(response.data));
  yield put(endAsync());
}

export function* counterSaga() {
  yield takeEvery(increaseByAsync, counterAddSync);
  yield takeEvery(decreaseByAsync, counterSubSync);
}
