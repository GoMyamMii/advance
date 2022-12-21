import React from "react";
import styled from "styled-components";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

const Main = () => {
  return (
    <MainContainer>
      <InputTodo />
      <TodoList />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export default Main;
