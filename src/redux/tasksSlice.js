import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, editTodo, fetchTodo } from './operations';

const tasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,

  extraReducers: {
    [fetchTodo.pending](state) {
      state.isLoading = true;
    },
    [fetchTodo.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTodo.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addTodo.pending](state) {
      state.isLoading = true;
    },
    [addTodo.fulfilled](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: [...state.items, payload],
      };
    },
    [addTodo.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [deleteTodo.pending](state) {
      state.isLoading = true;
    },
    [deleteTodo.fulfilled](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        error: null,
        items: state.items.filter(task => task.id !== payload.id),
      };
    },
    [deleteTodo.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [editTodo.pending](state) {
      state.isLoading = true;
    },
    [editTodo.fulfilled](state, { payload }) {
      return {
        ...state,
        isLoading: false,
        items: state.items.map(task =>
          task.id === payload.id ? payload : task
        ),
      };
    },
    [editTodo.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { addTask, deleteTask, toggleComleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
