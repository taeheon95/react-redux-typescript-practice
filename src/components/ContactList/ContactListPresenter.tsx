import React from "react";
import { Props } from ".";
import { Contact } from "../../types";
import ContactComponent from "../ContactComponent";

function ContactListPresenter(props: Props) {
  const { contactList } = props;
  return (
    <div>
      {contactList.map((contact: Contact) => (
        <ContactComponent key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default ContactListPresenter;
