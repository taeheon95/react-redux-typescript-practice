import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { createContact, getAll, updateContact } from "../../../apis/contactApi";
import { AddContact, Contact } from "../../../types";
import {
  getContactList,
  getContactListSuccess,
  getContactListFailed,
  addContact,
  updateContactList,
} from "./contactList";

function* getContact() {
  try {
    const response: Contact[] = yield call(getAll);
    yield put(getContactListSuccess(response));
  } catch (e) {
    yield put(getContactListFailed({ error: e }));
  }
}

function* contactAdd(action: PayloadAction<AddContact>) {
  try {
    const response: Contact = yield call(createContact, action.payload);
    yield put(addContact(response));
  } catch (e) {
    yield put({ type: "contactList/CONTACT_ADD_FAILED", payload: e });
  }
}

function* contactUpdate(action: PayloadAction<Contact>) {
  try {
    const response: Contact = yield call(updateContact, action.payload);
    yield put(updateContactList(response));
  } catch (e) {
    yield put({ type: "contactList/CONTACT_UPDATE_FAILED", payload: e });
  }
}

export function* contactListSaga() {
  yield takeEvery(getContactList.type, getContact);
  yield takeLatest(addContact.type, contactAdd);
  yield takeLatest(updateContactList.type, contactUpdate);
}
