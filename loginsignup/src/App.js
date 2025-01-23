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

function App() {
  return (
    <div className ="App">
       <Routes>
          <Route path='/' element={<Navigate to="/login"/>}/>
          <Route path='/signup' element={<LogSignIn/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
