import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import {
  addContact,
  setEditContact,
} from "../../stores/modules/contact/contact";
import {
  deleteContact,
  updateContact,
} from "../../stores/modules/contactList/contactList";
import { Contact } from "../../types";
import MainBoxPresenter from "./MainBoxPresenter";

function MainBoxContainer() {
  const dispatch = useAppDispatch();

  const contact = useAppSelector((state) => state.contact);
  const setContact = useCallback(
    (contact: Contact) => {
      dispatch(setEditContact(contact));
    },
    [dispatch]
  );

  const contactList = useAppSelector((state) => state.contactList.contactList);
  const contactAdd = useCallback(
    (contact: Contact) => {
      dispatch(addContact(contact));
    },
    [dispatch]
  );

  const contactUpdate = useCallback(
    (contact: Contact) => {
      dispatch(updateContact(contact));
    },
    [dispatch]
  );

  const contactDelete = useCallback(
    (id: number) => {
      dispatch(deleteContact(id));
    },
    [dispatch]
  );

  return <MainBoxPresenter />;
}

export default MainBoxContainer;
