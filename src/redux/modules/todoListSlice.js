import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const name = "todoList";

// 이 자식들이 action 인듯 ?? (그런데 thunk를 곁들인..)
export const getTodoList = createAsyncThunk(
  `${name}/getTodoList`,
  async (_, thunkAPI) => {
    // pending 이 여기서 될듯 ?
    try {
      // getTodoList 가 실행되면 try 해봄 (fulfilled 실행)
      const res = await axios.get("http://localhost:3001/todoList");
      return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
      // getTodoList 가 실행하다가 실패하면 실행됨 (reject 실행)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 이 자식이 reducer 그 자체 (그런데 action creator를 곁들인..)
const todoListSlice = createSlice({
  name,
  initialState: {
    todoListData: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getTodoList.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodoList.fulfilled]: (state, action) => {
      state.todoListData = action.payload;
      state.isLoading = false;
    },
    [getTodoList.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
  },
});

// slice 는 reducer + action creator 인데
// 위에 createSlice 로 만든 녀석이 가지고 있는 reducers 와 extraReducers 일 것이다. (추측)
const { reducer } = todoListSlice;

// configStore 에서 todoList로 불러온 녀석이 나야..
export default reducer;
