import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../../../types";

export interface ContactListState {
  contactList: Contact[];
  status: "idle" | "loading" | "failed";
  error: unknown;
}

const initialState: ContactListState = {
  contactList: [],
  status: "idle",
  error: null,
};

const contactList = createSlice({
  name: "contactList",
  initialState,
  reducers: {
    getContactListSuccess: (state, action: PayloadAction<Contact[]>) => {
      state.contactList = action.payload;
      state.status = "idle";
    },
    getContactListFailed: (
      state,
      action: PayloadAction<{ error: unknown }>
    ) => {
      state.status = "failed";
      state.error = action.payload;
    },
    getContactList: (state) => {
      state.status = "loading";
    },
  },
});

export const { getContactListSuccess, getContactList, getContactListFailed } =
  contactList.actions;
export default contactList.reducer;