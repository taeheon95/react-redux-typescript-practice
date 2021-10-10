import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import contact from "./modules/contact/contact";
import contactListReducer from "./modules/contactList/contactList";
import counter from "./modules/counter/counter";
import keyword from "./modules/keyword";

export const store = configureStore({
  reducer: {
    contactList: contactListReducer,
    counter: counter,
    contact: contact,
    keyword: keyword,
  },
  devTools: process.env.NODE_ENV === "development",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;