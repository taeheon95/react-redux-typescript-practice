import React from "react";
import { Contact } from "../../types";
import ContactDetailPresenter from "./ContactDetailPresenter";

function ContactDetailContainer({ contact }: { contact: Contact }) {
  return <ContactDetailPresenter contact={contact} />;
}

export default ContactDetailContainer;
