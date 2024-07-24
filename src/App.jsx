// src/App.jsx

import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ExploreMore from './Pages/ExploreMore/ExploreMore';
import ExploreMoreMore from './Pages/ExploreMoreMore/ExploreMoreMore';
import Report from './Pages/Report/Report';
import DashBoard from './Pages/Dashboard/DashBoard';
import Upload from './Pages/Upload/Upload';
import { Login } from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './Components/PrivateRoute';
import ViewFile from './Pages/ViewFiles/ViewFile';

const App = () => {
  return (
    <div className="app">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ExploreMore" element={<ExploreMore />} />
          <Route path="/ExploreMoreMore" element={<ExploreMoreMore />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/viewfile" element={<PrivateRoute><ViewFile /></PrivateRoute>} />
          <Route element={<PrivateRoute />}>
            <Route path="/Dashboard" element={<DashBoard />} />
            <Route path="/Upload" element={<Upload />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
