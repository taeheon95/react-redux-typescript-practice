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

    addContact: (state, action: PayloadAction<Contact>) => {
      state.contactList.push(action.payload);
    },

    setter: (state, action: PayloadAction<Contact[]>) => {
      state.contactList = action.payload;
    },

    updateContactList: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.contactList.findIndex(
        (contact) => contact.id === action.payload.id
      );
      state.contactList.splice(contactIndex, 1, action.payload);
    },

    deleteContact: (state, action: PayloadAction<number>) => {
      const contactIndex = state.contactList.findIndex(
        (contact) => contact.id === action.payload
      );
      state.contactList.splice(contactIndex, 1);
    },
  },
});

export const {
  getContactListSuccess,
  getContactList,
  getContactListFailed,
  addContact,
  updateContactList,
  deleteContact,
  setter,
} = contactList.actions;
export default contactList.reducer;
