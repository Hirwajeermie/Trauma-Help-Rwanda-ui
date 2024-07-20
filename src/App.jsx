// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ExploreMore from './Pages/ExploreMore/ExploreMore'
import ExploreMoreMore from './Pages/ExploreMoreMore/ExploreMoreMore'
import Report from './Pages/Report/Report'
import DashBoard from './Pages/Dashboard/DashBoard'
import Upload from './Pages/Upload/Upload'
import ViewFile from './Pages/ViewFiles/ViewFile'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import { AuthProvider } from './context/AuthContext'




const App = () => {
  return (
    <div className='app'>
      <Routes>
      <AuthProvider>
      <Route path='/Dashboard' element={<DashBoard/>}/>
      <Route path='/Upload' element={<Upload/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/ViewFile' element={<ViewFile/>}/>
      </AuthProvider>
    <Navbar/>

     <Route path='/' element={<Home/>} />
     <Route path='/ExploreMore' element={<ExploreMore/>} />
     <Route path='/ExploreMoreMore' element={<ExploreMoreMore/>} />
     <Route path='/Report' element={<Report/>} />
     <Route path='/Register' element={<Register/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
