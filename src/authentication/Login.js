import React, { useState } from 'react'
import './Login.css'
import FacebookIcon from '@mui/icons-material/Facebook';

function Login({onLogin}) {
   const [email, setEmail] = useState ("");
   const [password, setPassword] = useState ("");
   const [emailError, setEmailError] = useState ("");
   const [passwordError, setPasswordError] = useState ("");

   const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

   const handleSubmit = () => {
    setEmailError('');
    setPasswordError('');

    if(!email || !validateEmail(email)) {
        setEmailError('Please enter a valid email');
    }

    if(!password) {
        setPasswordError('Please fill in your password');
    }

    if(email && password && validateEmail(email)) {
        onLogin();
    }
  }

  return (
    <div className='login'>
        <img src="https://i.pinimg.com/originals/d5/1d/09/d51d097fbbd5cdc277d80c605ad1c455.png" alt="logo" />
        <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Email'value={email} />
        {emailError && <p>{emailError}</p>}
        <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Password'value={password} />
        {passwordError && <p>{passwordError}</p>}
        <button  onClick={handleSubmit}>Log in</button>
        <div className="separator">
                <div className="line"></div>
                <p>OR</p>
                <div className="line"></div>
                </div>
                <div className="other">
                <button className="fb-login-btn" >
                <FacebookIcon /> 
                    <span className='f'>Log in with Facebook</span>
                </button>
                <a className="forgot-password" href="#">Forgot password?</a>
            </div>
        </div>
  )
}

export default Login;
