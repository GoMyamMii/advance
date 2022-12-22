import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getTodoList } from "../redux/modules/todoListSlice";
import Todo from "./Todo";

const TodoList = () => {
  // configStore 의 reducer 안에 있는 녀석들 중 todoList 의 state 뽑아쓰기
  const todoState = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  // useEffect 로 처음에 랜더링 할 때 todoState 받아오기
  useEffect(() => {
    todoState.todoListData.length === 0 && dispatch(getTodoList());
  }, [todoState, dispatch]);

  const todoList = todoState.todoListData.filter((item) => !item.isDone);
  const doneList = todoState.todoListData.filter((item) => item.isDone);

  return (
    <TodoListContainer>
      <TodosContainer>
        <h1>Todo</h1>
        {todoList.map((item) => (
          <Todo
            title={item.todoTitle}
            isDone={item.isDone}
            id={item.id}
            key={item.id}
          />
        ))}
      </TodosContainer>
      <TodosContainer>
        <h1>Done</h1>
        {doneList.map((item) => (
          <Todo
            title={item.todoTitle}
            isDone={item.isDone}
            id={item.id}
            key={item.id}
          />
        ))}
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
