import { all } from "redux-saga/effects";
import { contactListSaga } from "./modules/contactList/contactListSaga";
import { counterSaga } from "./modules/counter/counterSaga";

export default function* rootSaga() {
  yield all([contactListSaga(), counterSaga()]);
}
