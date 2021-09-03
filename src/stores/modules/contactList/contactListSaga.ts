import { call, put, takeEvery } from "@redux-saga/core/effects";
import { getAll } from "../../../apis/contactApi";
import { Contact } from "../../../types";
import {
  getContactList,
  getContactListSuccess,
  getContactListFailed,
} from "./contactList";

function* getContact() {
  try {
    const response: Contact[] = yield call(getAll);
    yield put(getContactListSuccess(response));
  } catch (e) {
    yield put(getContactListFailed({ error: e }));
  }
}

export function* contactListSaga() {
  yield takeEvery(getContactList.type, getContact);
}
