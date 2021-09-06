import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../../../types";

interface IContactState {
  [key: string]: number | string;
  id: number;
  name: string;
  phoneNumber: string;
  age: number;
  email: string;
  description: string;
}

const initialState: IContactState = {
  id: 0,
  name: "",
  phoneNumber: "",
  age: 0,
  email: "",
  description: "",
};

export const UPDATE_CONTACT = "contact/UPDATE_CONTACT" as const;
export const ADD_CONTACT = "contact/ADD_CONTACT" as const;

export const updateContact = (contact: Contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

export const AddContact = (contact: Contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

const contact = createSlice({
  name: "editContact",
  initialState,
  reducers: {
    setEditContact: (state, action: PayloadAction<Contact>) => {
      state = action.payload;
    },
    editContact: (
      state,
      action: PayloadAction<{ keyString: string; value: string | number }>
    ) => {
      const { keyString, value } = action.payload;
      state[keyString] = typeof value === "number" ? Number(value) : value;
    },
    cleanUp: (state) => {
      state = initialState;
    },
  },
});

export const { setEditContact, editContact, cleanUp } = contact.actions;
export default contact.reducer;
