import React from "react";
import styled from "styled-components";
import InputTask from "./InputTask";
const MainContainer = styled.div`
  background: black;
  flex:1;
  display: flex;
  flex-direction: column;
`;
const MainHeading = styled.p`
  font-size: 2.5rem;
  color: white;
  text-align: center;
`;
const SubHeading=styled.p`
font-size:1.3rem;
color:white;
padding-left: 10px;
    margin-bottom: 10px;
`
const Todo = () => {
  return (
    <MainContainer>
      <MainHeading>To-Do List</MainHeading>
<SubHeading> Add new task in the list</SubHeading>
      <InputTask/>
    </MainContainer>
  );
};

export default Todo;
