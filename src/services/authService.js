import axios from "axios";
import { setCredentials, logout } from "../features/authSlice";
import { store } from "../store";

const API_URL = `https://trauma-help-rwanda-api.onrender.com/api/v1/auth`;

export const registerUser = async (userData) => {
  await axios.post(`${API_URL}/register`, userData);
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  const { token, user } = response.data;

  store.dispatch(setCredentials({ user, token }));

  localStorage.setItem("token", token);
};

export const logoutUser = () => {
  store.dispatch(logout());
  localStorage.removeItem("token");
};
