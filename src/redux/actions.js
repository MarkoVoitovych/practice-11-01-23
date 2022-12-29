import { nanoid } from 'nanoid';

export const addTask = text => ({
  type: 'tasks/addTask',
  payload: {
    id: nanoid(),
    text,
    completed: false,
  },
});

export const deleteTask = id => ({
  type: 'tasks/deleteTask',
  payload: id,
});

export const toggleComleted = id => ({
  type: 'tasks/toggleComleted',
  payload: id,
});

export const setStatusFilter = value => ({
  type: 'filters/setStatusFilter',
  payload: value,
});
