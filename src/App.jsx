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
import PrivateRoute from './Components/PrivateRoute';
import ViewFile from './Pages/ViewFiles/ViewFile';
import { AuthProvider } from './context/AuthContext';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import ResetPassword from './Pages/Auth/ResetPassword';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/ExploreMore" element={<ExploreMore />} />
        <Route path="/ExploreMoreMore" element={<ExploreMoreMore />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />


        {/* Protected routes */}
        <Route element={<AuthProvider> <PrivateRoute /> </AuthProvider>}>
          <Route path="/viewfile" element={<ViewFile />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/Upload" element={<Upload />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
