// api.js

import axios from 'axios';
import { store } from './store';

const api = axios.create({
  baseURL: 'http://localhost:7000/api/v1',
});

api.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth.token || localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
