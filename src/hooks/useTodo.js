import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  deleteTodoList,
  postTodoList,
  toggleTodoList,
} from "../redux/modules/todoListSlice";

const useTodo = () => {
  const [todoItemValue, setTodoItem] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setTodoItem(e.target.value);
  };

  const addTodo = () => {
    dispatch(postTodoList(todoItemValue));
  };

  const deleteTodo = (id) => {
    dispatch(deleteTodoList(id));
  };

  const toggleTodo = (id, isDone) => {
    dispatch(toggleTodoList({ id, isDone }));
  };

  return { todoItemValue, onChange, addTodo, deleteTodo, toggleTodo };
};

export default useTodo;
