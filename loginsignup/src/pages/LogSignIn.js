import './App.css'
import React from 'react';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { handleError, handleSuccess } from './util';

function LogSignIn() {
  const navigate = useNavigate();
  //for signup
  const[signupInfo,setsignupInfo] = useState({
    name:'',
    userid: '',
    email: '',
    userType: '',
    password: ''
    
  })
  const handlesuChange = (e)=>{
    const {name,value} = e.target;
    console.log(name,value)
    const copySignUpInfo = {...signupInfo}
    copySignUpInfo[name] = value
    setsignupInfo(copySignUpInfo)

  }
  const handleSignUp = async (e)=>{
      e.preventDefault();
      //const { name,userid,email,password,userType } = signupInfo;
      const name = signupInfo.name;
      const userID = signupInfo.userid;
      const email = signupInfo.email;
      const password = signupInfo.password;
      const userType = signupInfo.userType.toUpperCase();


      if(!name || !email || !password || !userID || !userType){
        toast.error("Please Enter Data", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
      
          console.log(signupInfo)
          // try{
          
            axios.post('https://ecommercebackend-8lcw.onrender.com/signup',{name,userID,email,password,userType}) //type here "keys" as mentioned in API one capslock can also result into error, also sequence must be same !
            //axios.post('http://localhost:4444/signup',{name,userID,email,password,userType}) //for local running
            .then(result=>{
              console.log(result)
              //for pop up showing success !
              toast.success("Account Created, redirecting to Login page",{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
              setTimeout(() => {
                navigate('/login')
              }, 5000);
              
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
              });
            })
          
  }
  return (
    
    <div className ='container'>
      <div className ='form-container'>
        
          {/*Code for SignUp page  */}
          <div className='form'>
          <h2>Create an Account</h2>
          <form >
            <input 
                type='name'
                name ='name'
                placeholder='Enter your name'
                onChange={handlesuChange}
                autoFocus
                value={signupInfo.name}
                />
              <input 
                type='userid'
                name = 'userid'
                placeholder='Username'
                onChange={handlesuChange}
                autoFocus
                value={signupInfo.userid}
                />
              <input 
                  type='email'
                  name='email'
                  placeholder='Email'
                  onChange={handlesuChange}
                  autoFocus
                  value={signupInfo.email}
              />
              <input
                   type='password'
                   name='password'
                   placeholder='Password'
                   onChange={handlesuChange}
                   autoFocus
                   value={signupInfo.password}
              />
              {/* <input type='password'
              placeholder='Confirm Password'/> */}
              {/* <label for='customer'> */}
                <input 
                  type='name'
                  name='userType'
                  // id='customer'
                  // value='CUSTOMER'
                  // name='usertype'
                  placeholder='Customer/Admin'
                  onChange={handlesuChange}
                  autoFocus
                  value={signupInfo.userType}
                />
                {/* Customer
              </label> */}
              {/* <label for='admin'>
              <input 
                  type='radio'
                  id='admin'
                  value='ADMIN'
                  name='usertype'
                  onChange={handleChange}
              />
                Admin
              </label>
               */}
              
            </form>
            <button type='submit'onClick={handleSignUp}>SignUp</button>
            <p>Already have an account ?<Link to="/login"> LogIn</Link></p>
          <ToastContainer/>    
          </div>
        {/* </>} */}
        </div>
    </div>
    
  )
}

export default LogSignIn