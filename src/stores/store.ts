import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import contact from "./modules/contact/contact";
import contactListReducer from "./modules/contactList/contactList";
import CounterReducer from "./modules/counter/counter";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    contactList: contactListReducer,
    counter: CounterReducer,
    contact: contact,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
  devTools: process.env.NODE_ENV === "development",
});
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
