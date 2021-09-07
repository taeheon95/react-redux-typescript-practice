import React, { useCallback } from "react";
import MainBoxContainer from "./MainBoxContainer";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { setEditContact } from "../../stores/modules/contact/contact";
import { Contact } from "../../types";
import {
  addContact,
  deleteContact,
  setter,
  updateContactList,
} from "../../stores/modules/contactList/contactList";

function MainBox() {
  const dispatch = useAppDispatch();

  const contact = useAppSelector((state) => state.contact);
  const setContact = useCallback(
    (contact: Contact) => {
      dispatch(setEditContact(contact));
    },
    [dispatch]
  );

  const contactList = useAppSelector((state) => state.contactList.contactList);
  const setContactList = useCallback(
    (contactList: Contact[]) => {
      dispatch(setter(contactList));
    },
    [dispatch]
  );
  const contactAdd = useCallback(
    (contact: Contact) => {
      dispatch(addContact(contact));
    },
    [dispatch]
  );

  const contactUpdate = useCallback(
    (contact: Contact) => {
      dispatch(updateContactList(contact));
    },
    [dispatch]
  );

  const contactDelete = useCallback(
    (id: number) => {
      dispatch(deleteContact(id));
    },
    [dispatch]
  );

  return <MainBoxContainer contact={contact} setContact={setContact} />;
}

export default MainBox;
