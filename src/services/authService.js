import axios from "axios";
import { setCredentials, logout } from "../features/authSlice";
import { store } from "../store";

const API_URL =  import.meta.env.VITE_API_URL;

export const registerUser = async (userData) => {
  await axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  const { token, user } = response.data;

  store.dispatch(setCredentials({ user, token }));

  localStorage.setItem("token", token);
};

export const logoutUser = () => {
  store.dispatch(logout());
  localStorage.removeItem("token");
};

export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/auth/forgot-password`, { email });
    return response.data;
  } catch (error) {
   
    throw error.response?.data || { message: 'Something went wrong' };
  }
};

export const resetPassword = async ({ token, newPassword }) => {
  const response = await axios.post(`${API_URL}/auth/reset-password/${token}`, {
    newPassword,
  });
  return response.data;
};

