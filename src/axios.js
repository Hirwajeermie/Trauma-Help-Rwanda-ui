// api.js

import axios from 'axios';
import { store } from './store';

const api = axios.create({
  baseURL: 'https://trauma-help-rwanda-api.onrender.com/api/v1',
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
