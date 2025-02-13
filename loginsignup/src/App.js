//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Navigate, Route,Routes} from 'react-router-dom';
//import { Link } from 'react-router-dom'
//import { handleError, handleSuccess } from './util';
import LogSignIn from './pages/LogSignIn';
//import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import { useAuthContext } from './AuthContext';
//changes from lab-204
function App() {
  const {authUser} = useAuthContext()
  return (
    <div className ="App">
       <Routes>
          {/* <Route path='/' element={<Navigate to="/login"/>}/> */}
          {/* <Route path='/signup' element={<LogSignIn/>}/> */}
          <Route path='/signup' element={authUser ? <Navigate to='/home'/>:<LogSignIn/>}/>
          <Route path='/home' element={authUser ? <Home/> : <Navigate to="/"/>}/>
          {/* <Route path='/login' element={<Login/>}/> */}
          <Route path='/' element={authUser ? <Navigate to='/home'/>:<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
