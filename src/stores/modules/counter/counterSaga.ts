import { call, put, takeEvery } from "@redux-saga/core/effects";
import { fetchCount } from "../../../apis/counterAPI";
import {
  decreaseBy,
  decreaseByAsync,
  DECREASE_BY_ASYNC,
  increaseBy,
  increaseByAsync,
  INCREASE_BY_ASYNC,
} from "./counter";

function* counterAddSync(action: ReturnType<typeof increaseByAsync>) {
  const response: { data: number } = yield call(fetchCount, action.payload);
  yield put(increaseBy(response.data));
}

function* counterSubSync(action: ReturnType<typeof decreaseByAsync>) {
  const response: { data: number } = yield call(fetchCount, action.payload);
  yield put(decreaseBy(response.data));
}

export function* counterSaga() {
  yield takeEvery(INCREASE_BY_ASYNC, counterAddSync);
  yield takeEvery(DECREASE_BY_ASYNC, counterSubSync);
}
