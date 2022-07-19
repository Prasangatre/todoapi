import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SubCards from "./SubCards";
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 0 0 33.33%;
  gap: 20px;
`;
const MainCard = ({ usertask, OnDelete }) => {
  return (
    <MainContainer>
      {usertask.slice(185, 210).map((item) => (
        <SubCards item={item} OnDelete={OnDelete} key={item.id} />
      ))}
    </MainContainer>
  );
};

export default MainCard;
