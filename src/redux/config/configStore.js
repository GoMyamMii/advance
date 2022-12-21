import { configureStore } from "@reduxjs/toolkit";

// todoListSlice 에서 todoList 라는 녀석을 불러올건데 사실 걔는 reducer야
import todoList from "../modules/todoListSlice";

const store = configureStore({ reducer: { todoList } });

export default store;
