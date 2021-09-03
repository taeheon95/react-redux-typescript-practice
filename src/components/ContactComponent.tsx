import React from "react";
import { Contact } from "../types";

function ContactComponent({ contact }: { contact: Contact }) {
  return (
    <>
      <div>{contact.id}</div>
      <div>{contact.age}</div>
      <div>{contact.name}</div>
      <div>{contact.email}</div>
      <div>{contact.phoneNumber}</div>
      <div>{contact.description}</div>
    </>
  );
}

export default ContactComponent;
