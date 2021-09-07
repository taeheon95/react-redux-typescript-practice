import React from "react";
import styled from "styled-components";
import { Props } from ".";
import { Contact } from "../../types";
import ContactComponent from "../ContactComponent";
import SearchBox from "../SearchBox";

const Box = styled.div`
  flex: 1;
  border-right: 1px solid #9b9b9b;
  display: flex;
  flex-direction: column;
`;

const ListBox = styled.ul`
  flex: 1;
  overflow-y: auto;
`;

interface PresenterProps extends Props {
  hasKeyword: Function;
}

function ContactListPresenter(props: PresenterProps) {
  const { contactList, hasKeyword } = props;
  return (
    <Box>
      <SearchBox />
      <ListBox>
        {contactList
          .filter((contact) => hasKeyword(contact))
          .map((contact: Contact) => (
            <ContactComponent key={contact.id} contact={contact} />
          ))}
      </ListBox>
    </Box>
  );
}

export default ContactListPresenter;
