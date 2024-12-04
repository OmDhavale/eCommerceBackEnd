import React from 'react'
import './App.css'

import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
function Login() {

  const navigate = useNavigate();
    //for Login
    const[loginInfo,setLoginInfo] = useState({
      userID: '',
      password: ''
    })
  
    const handleChange = (e)=>{
      const {name,value} = e.target;
      console.log(name,value)
      const copyLoginInfo = {...loginInfo}
      copyLoginInfo[name] = value
      setLoginInfo(copyLoginInfo)
  
    }
    const handleSubmit = async (e)=>{
      e.preventDefault();
      console.log(loginInfo)
      const userID = loginInfo.userID;
      const password = loginInfo.password;
      //axios.post('http://localhost:4444/signin',{userID,password})
      axios.post('https://ecommercebackend-8lcw.onrender.com/login',{userID,password})
      .then(result=>{
        console.log(result);
        toast.success("Login succesful !",{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        if(result.data==="Success"){
          navigate('/home')
        }
      })
      .catch(err=>{
        console.log(err.response.data)
        //for showing pop up of error on page
        toast.error("ERROR SENDING POST REQ.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
      })
      
    }

  return (
    <div className ='container'>
    <div className ='form-container'>
    <div className='form'>

            <h2>Login to your Account</h2>
              <input 
                type='name'
                name='userID'
                placeholder='Username'
                onChange={handleChange}
                autoFocus
                value={loginInfo.userID}
              />
              <input 
                type='password'
                name='password'
                placeholder='Password'
                onChange={handleChange}
                autoFocus
                value={loginInfo.password}
              />
              <button type='submit'onClick={handleSubmit}>LogIn</button>
              <p>Not a member ?<a href='#'> Sign up</a> </p>
          </div>
      </div>
      </div>
  )
}

export default Login