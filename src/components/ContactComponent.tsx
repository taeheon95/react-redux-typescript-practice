import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../stores/hooks";
import { setEditContact } from "../stores/modules/contact/contact";
import { Contact } from "../types";

const Card = styled.li<{ isSelect: boolean }>`
  display: flex;
  background-color: ${(props) => (props.isSelect ? "#28adfa" : "inherit")};
`;

const Button = styled.button<{ isSelect: boolean }>`
  flex: 1;
  height: 80px;
  border: 0;
  border-bottom: 1px solid #d4d3d3;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  z-index: 0;
  background-color: transparent;
  color: ${(props) => (props.isSelect ? "white" : "inherit")};
`;

const Name = styled.div`
  padding: 5px;
`;

const PhoneNumber = styled.div`
  padding: 5px;
`;

function ContactComponent({ contact }: { contact: Contact }) {
  const selectedContact = useAppSelector((state) => state.contact);
  const dispatch = useAppDispatch();

  return (
    <Card isSelect={contact.id === selectedContact.id}>
      <Button
        isSelect={contact.id === selectedContact.id}
        onFocus={() => {
          dispatch(setEditContact(contact));
        }}
      >
        <Name>{contact.name}</Name>
        <PhoneNumber>{contact.phoneNumber}</PhoneNumber>
      </Button>
    </Card>
  );
}

export default ContactComponent;
