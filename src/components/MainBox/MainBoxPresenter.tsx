import React from "react";
import styled from "styled-components";
import ContactDetail from "../ContactDetail";
import ContactList from "../ContactList";

const Box = styled.div`
  display: flex;
  border: 1px solid #9b9b9b;
  position: relative;
  width: 600px;
  height: 500px;
`;

const CircleButton = styled.button`
  position: absolute;
  border: none;
  color: white;
  text-align: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  &:disabled {
    cursor: not-allowed;
    background-color: #b6b6b6;
  }
`;

const AddButton = styled(CircleButton)`
  bottom: 10px;
  right: 65px;
  background-color: #28adfa;
`;

const DelButton = styled(CircleButton)`
  bottom: 10px;
  right: 10px;
  background-color: #c96e32;
`;

function MainBoxPresenter() {
  return (
    <Box>
      <AddButton>+</AddButton>
      <DelButton>-</DelButton>
      <ContactList />
      <ContactDetail />
    </Box>
  );
}

export default MainBoxPresenter;
