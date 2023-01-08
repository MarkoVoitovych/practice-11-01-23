import { createAsyncThunk } from '@reduxjs/toolkit';
import * as mockAPI from '../utils/mockAPI';

export const fetchTodo = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await mockAPI.getTasks();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  'tasks/addTask',
  async (text, thunkAPI) => {
    try {
      const { data } = await mockAPI.addTask(text);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'tasks/deleteTask',
  async (id, thunkAPI) => {
    try {
      const { data } = await mockAPI.deleteTask(id);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editTodo = createAsyncThunk(
  'tasks/editTask',
  async (task, thunkAPI) => {
    try {
      const { data } = await mockAPI.editTask(task);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
