import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { postTodoList } from "../redux/modules/todoListSlice";

const InputTodo = () => {
  const dispatch = useDispatch();

  const todoTitleRef = useRef();

  const handleAddClick = (e) => {
    dispatch(postTodoList(todoTitleRef.current.value));
  };

  return (
    <InputTodoContainer>
      <StyledInput ref={todoTitleRef} />
      <StyledButton
        onClick={(e) => {
          handleAddClick(e);
        }}
      >
        추가하기
      </StyledButton>
    </InputTodoContainer>
  );
};

const InputTodoContainer = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 400px;
  height: 30px;
  outline: none;
  border: 1px solid #333;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  width: 120px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #eee;
`;

export default InputTodo;
