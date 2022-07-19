import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainCard from "./MainCard";
import axios from "axios";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const InputField = styled.input`
  font-size: 15px;
  width: 45%;
  padding: 10px;
  margin: 10px;
  color: white;
  background: #171717;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: FFFFFF;
  }
`;
const SubmitButton = styled.div`
  display: flex;
`;
const Button = styled.button`
  background: #c620a7;
  border-radius: 20px;
  width: 155px;
  font-size: 1.5em;
  margin-left: 50px;
  height: 50px;
`;
const SubHeading = styled.p`
  font-size: 1.3rem;
  color: white;
  padding-left: 10px;
  margin: 20px 10px;
`;

const InputTask = () => {
  const [usertask, setUsertask] = useState([]);
  const [Title, SetTitle] = useState("");
  const GetUserTask = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const data = res.data;
      setUsertask(data);
    });
  };

  useEffect(() => {
    GetUserTask();
  }, []);

  const onAdd = (titles) => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        title: titles,
        completed: false,
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }) // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((data) => {
        setUsertask((usertask) => [...usertask, data]);
      });
  };

  const HandleClick = (e) => {
    e.preventDefault();
    onAdd(Title);
    e.target.title.value = "";
  };

  const OnDelete = async (id) => {
    await fetch("https://jsonplaceholder.typicode.com/todos/${id}", {
      method: "DELETE",
    }).then((res) => {
      setUsertask(
        usertask.filter((user) => {
          return user.id !== id;
        })
      );
    });
  };
  return (
    <MainContainer>
      <form onSubmit={HandleClick}>
        <InputContainer>
          <InputField
            name="title"
            placeholder="Enter the task here"
            onChange={(e) => SetTitle(e.target.value)}
          />
          <SubmitButton>
            <Button onSubmit={HandleClick}>Submit</Button>
          </SubmitButton>
        </InputContainer>
      </form>
      <SubHeading>Added task in todo list:</SubHeading>
      <MainCard usertask={usertask} OnDelete={OnDelete} />
    </MainContainer>
  );
};

export default InputTask;
