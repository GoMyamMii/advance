import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTodoList } from "../redux/modules/todoListSlice";

const Todo = ({ title, isDone, id }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteTodoList(id));
  };

  return (
    <TodoContainer>
      <H3>{title}</H3>
      <BtnContainer>
        <StyledBtn>{isDone ? "Cancel" : "Done"}</StyledBtn>
        <StyledBtn
          onClick={() => {
            handleDeleteClick();
          }}
        >
          Delete
        </StyledBtn>
      </BtnContainer>
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  width: 400px;
  background-color: #ddd;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 20px;
`;

const StyledBtn = styled.button`
  background-color: #333;
  color: #eee;
  width: 100px;
  height: 30px;
  margin: 10px;
  border-radius: 5px;
  border: none;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const H3 = styled.h3`
  display: flex;
  justify-content: center;
  margin: 10px auto;
`;

export default Todo;
