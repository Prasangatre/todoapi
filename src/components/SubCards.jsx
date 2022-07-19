import React, { useState } from "react";
import styled from "styled-components";
const MainContainer = styled.div`
  background: #2f2f2f;
  display: flex;
  flex-direction: column;
  min-width: 370px;
  max-width: 400px;
  border-radius: 9px;
  box-sizing: border-box;
  border: 3px solid ${(props) => (props.completed ? "darkgreen" : `red`)};
`;
const Title = styled.div`
  font-size: 1.3rem;
  color: white;
`;
const Divider = styled.div`
  border-bottom: 3px solid #5c5c5c;
  padding-top: 15px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;
const ButtonComplete = styled.button`
  background: #c620a7;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  width: 145px;
`;
const ButtonDelete = styled.button`
  background: #afafaf;
`;

const SubCards = (props) => {
  const ComValue = props.item.completed;
  const HandleDelete = () => {
    props.OnDelete(props.item.id);
  };

  const [Completed, setCompleted] = useState(ComValue);
  const HandleCompleted = () => {
    setCompleted((completed) => !completed);
  };
  return (
    <MainContainer completed={Completed}>
      <Title>{props.item.title}</Title>
      <Divider></Divider>
      <ButtonContainer>
        <ButtonComplete onClick={HandleCompleted}>
          Mark as completed
        </ButtonComplete>
        <ButtonDelete onClick={HandleDelete}>Delete</ButtonDelete>
      </ButtonContainer>
    </MainContainer>
  );
};

export default SubCards;
