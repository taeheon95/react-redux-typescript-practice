import React from "react";
import styled from "styled-components";
import ContactList from "../components/ContactList";
import MainBox from "../components/MainBox";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  color: black;
  font-size: large;
  font-weight: bold;
  margin-bottom: 15px;
`;

function ContactListPage() {
  return (
    <>
      <MainContainer>
        <Title>UNIT6 연락처</Title>
        <MainBox />
      </MainContainer>
    </>
  );
}

export default ContactListPage;
