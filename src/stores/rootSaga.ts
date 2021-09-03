import { all } from "redux-saga/effects";
import { contactListSaga } from "./modules/contactList/contactListSaga";

export default function* rootSaga() {
  yield all([contactListSaga()]);
}
