import React from 'react'
import './App.css'

import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../AuthContext';

const api = require("./apis/apis")
function Login() {
  const {authUser,setAuthUser} = useAuthContext()
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
      axios.post(api.signInAPI,{userID,password})
      //axios.post('https://ecommercebackend-8lcw.onrender.com/signin',{userID,password})
      .then(result=>{
        console.log(result);
        
        if(result.data.message==="User logged in succesful !"){
          toast.success("Login succesful !",{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          // setTimeout(() => {
          //   navigate('/home')
          // }, 5000);
          localStorage.setItem(
            "chat-user",
            JSON.stringify({ userID, password })
          );

          setAuthUser({ userID, password });
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
              <p>Not a member ?<Link to="/signup"> Sign up</Link> </p>
              <ToastContainer/>
          </div>
      </div>
      </div>
  )
}

export default Login