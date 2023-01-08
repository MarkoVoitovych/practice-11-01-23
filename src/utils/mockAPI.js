import axios from 'axios';

axios.defaults.baseURL = 'https://63a59c54f8f3f6d4abfae4ab.mockapi.io/';

export function getTasks() {
  const tasks = axios.get('/tasks');
  return tasks;
}

export function addTask(text) {
  const newTask = axios.post('/tasks', { text, completed: false });
  return newTask;
}

export function editTask(task) {
  const editedTask = axios.put(`/tasks/${task.id}`, {
    completed: !task.completed,
  });
  return editedTask;
}

export function deleteTask(id) {
  const removedTask = axios.delete(`/tasks/${id}`);
  return removedTask;
}
