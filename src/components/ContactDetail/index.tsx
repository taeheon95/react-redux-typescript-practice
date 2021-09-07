import React from "react";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import ContactDetailContainer from "./ContactDetailContainer";
import Empty from "./Empty";

function ContactDetail() {
  const contact = useAppSelector((state) => state.contact);

  return contact.id === 0 ? (
    <Empty />
  ) : (
    <ContactDetailContainer contact={contact} />
  );
}

export default ContactDetail;
