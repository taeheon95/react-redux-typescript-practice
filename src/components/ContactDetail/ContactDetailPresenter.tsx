import React from "react";
import styled from "styled-components";
import { Contact } from "../../types";

const Box = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Item = styled.dl`
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

const Title = styled.dt`
  font-weight: bold;
  padding: 5px;
`;

const Content = styled.dd`
  padding: 5px;
`;

function ContactDetailPresenter({ contact }: { contact: Contact }) {
  return (
    <Box>
      <Item>
        <Title>이름</Title>
        <Content>{contact.name}</Content>
      </Item>
      <Item>
        <Title>나이</Title>
        <Content>{contact.age}</Content>
      </Item>
      <Item>
        <Title>전화번호</Title>
        <Content>{contact.phoneNumber}</Content>
      </Item>
      <Item>
        <Title>Email</Title>
        <Content>{contact.email}</Content>
      </Item>
      <Item>
        <Title>설명</Title>
        <Content>{contact.description}</Content>
      </Item>
    </Box>
  );
}

export default ContactDetailPresenter;
