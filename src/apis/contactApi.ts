import axios from "axios";
import { AddContact, Contact } from "../types";

const url = "https://contact-server-taeheon.herokuapp.com/contacts";

export const getAll = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const createContact = async (addContact: AddContact) => {
  const response = await axios.post(url, addContact);
  return response.data;
};

export const updateContact = async (contact: Contact) => {
  const response = await axios.put(url, contact);
  return response.data;
};
