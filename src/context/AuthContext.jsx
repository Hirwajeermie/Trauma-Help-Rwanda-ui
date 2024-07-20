import React, { createContext, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials, logout } from '../features/authSlice';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      navigate('/Login');
    }
  }, [token, navigate]);

  const login = (user, token) => {
    dispatch(setCredentials({ user, token }));
    navigate('/Dashboard'); 
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/Login'); 
  };

  return (
    <AuthContext.Provider value={{ login, logout: logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
