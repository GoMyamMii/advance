import React from "react";
import styled from "styled-components";
import Todo from "./Todo";

const TodoList = () => {
  return (
    <TodoListContainer>
      <TodosContainer>
        <h1>Todo</h1>
        <Todo />
      </TodosContainer>
      <TodosContainer>
        <h1>Done</h1>
        <Todo />
      </TodosContainer>
    </TodoListContainer>
  );
};

const TodoListContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-around;
`;

const TodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default TodoList;
