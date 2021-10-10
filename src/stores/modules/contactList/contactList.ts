import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAll, createContact, updateContact as update, removeContact } from "../../../apis/contactApi";
import { AddContact, Contact } from "../../../types";

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

export const getContactList = createAsyncThunk(
  'contactList/getContactList',
  async () => {
    const response = await getAll();
    return response;
  }
)

export const addContact = createAsyncThunk(
  'contactList/addContact',
  async (addContact: AddContact) => {
    const response = await createContact(addContact);
    return response;
  }
)

export const updateContact = createAsyncThunk(
  'contactList/updateContact',
  async (contact: Contact) => {
    const response = await update(contact);
    return response;
  }
)

export const deleteContact = createAsyncThunk(
  'contactList/deleteContact',
  async (id: number) => {
    const response = await removeContact(id);
    return response;
  }
)

const contactList = createSlice({
  name: "contactList",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContactList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getContactList.fulfilled, (state, action) => {
        state.status = 'idle';
        state.contactList = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.status = 'idle'
        state.contactList.push(action.payload)
      })
      .addCase(updateContact.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.status = 'idle';
        const contactIndex = state.contactList.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contactList.splice(contactIndex, 1, action.payload);
      })
      .addCase(deleteContact.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.status = 'idle';
        const contactIndex = state.contactList.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contactList.splice(contactIndex, 1);
      })
  }
});

export default contactList.reducer;
