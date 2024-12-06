// src/services/taskService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const getTasks = async () => {
  const { data } = await apiClient.get('/tasks');
  return data;
};

export const createTask = async (task) => {
  const { data } = await apiClient.post('/tasks', task);
  return data;
};

export const updateTask = async (id, updates) => {
  const { data } = await apiClient.put(`/tasks/${id}`, updates);
  return data;
};

export const deleteTask = async (id) => {
  const { data } = await apiClient.delete(`/tasks/${id}`);
  return data;
};
