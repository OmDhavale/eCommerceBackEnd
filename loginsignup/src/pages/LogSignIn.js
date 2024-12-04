import './App.css'
import React from 'react';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
//import { Link } from 'react-router-dom'
//import { handleError, handleSuccess } from './util';

function LogSignIn() {
    const [isLogin,setIsLogin]=useState(true);

  //for Login
  const[loginInfo,setLoginInfo] = useState({
    userid: '',
    password: ''
  })

  const handleChange = (e)=>{
    const {name,value} = e.target;
    console.log(name,value)
    const copyLoginInfo = {...loginInfo}
    copyLoginInfo[name] = value
    setLoginInfo(copyLoginInfo)

  }
  //console.log('loginInfo->',loginInfo)


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
          
            axios.post('http://localhost:4444/signup',{name,userID,email,password,userType}) //type here "keys" as mentioned in API one capslock can also result into error, also sequence must be same !
            .then(result=>{
              console.log(result)
              //for pop up showing success !
              toast.success("User Created",{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
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
          //   const url = "http://localhost:4444/ecomm/api/v1/auth/signup"
          //   const response = await fetch(url,{
          //     method: "POST",
          //     headers: {
          //       'Content-Type': 'application/json'
          //   },
          //     body: JSON.stringify(signupInfo) 
          //   })
          //   const result = await response.json()
          //   console.log(result)
          // //for pop up showing success !
          //   toast.success("User Created",{
          //     position: "top-right",
          //     autoClose: 5000,
          //     hideProgressBar: false,
          //     closeOnClick: true,
          //     pauseOnHover: true,
          //     draggable: true,
          //     progress: undefined,
          //   })
          // }
          // catch(err){
          //   toast.error("ERROR SENDING POST REQ.", {
          //     position: "top-right",
          //     autoClose: 5000,
          //     hideProgressBar: false,
          //     closeOnClick: true,
          //     pauseOnHover: true,
          //     draggable: true,
          //     progress: undefined,
          //     });
          //     console.log(err)
          //   }
  }
  return (
    
    <div className ='container'>
      <div className ='form-container'>
        <div className ='form-toggle'>
          <button className={isLogin ? 'active' : ""} onClick={()=>setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ""}onClick={()=>setIsLogin(false)}>SignUp</button>
        </div>
        {isLogin ? <>
        {/* Code for login page */}
          <div className='form'>
            <h2>Login Form</h2>
              <input 
                type='name'
                name='nameInput'
                placeholder='Username'
                onChange={handleChange}
              />
              <input 
                type='password'
                placeholder='Password'
                onChange={handleChange}
              />
              <p>Not a member ?<a href='#'onClick={()=>setIsLogin(false)}> Sign up</a> </p>
          </div>
        </>:<>
          {/*Code for SignUp page  */}
          <div className='form'>
          <h2>SignUp Form</h2>
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
          <ToastContainer/>    
          </div>
        </>}
        </div>
    </div>
    
  )
}

export default LogSignIn