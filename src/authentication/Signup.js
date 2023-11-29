import { useState } from 'react';
import './Signup.css'
import './Login.css'
import FacebookIcon from '@mui/icons-material/Facebook';


function Signup({onSignup}) {
  const [email, setEmail] = useState ("");
  const [username, setUsername] = useState ("");
  const [password, setPassword] = useState ("");
  const [emailError, setEmailError] = useState ("");
  const [usernameError, setUsernameError] = useState ("");
  const [passwordError, setPasswordError] = useState ("");

  const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const handleSubmit = () => {
    setEmailError('');
    setUsernameError('');
    setPasswordError('');

    if(!email) {
        setEmailError('Please fill in your email');
    } else if(!validateEmail(email)) {
        setEmailError('Please enter a valid email');
    }

    if(!username) {
        setUsernameError('Please fill in your username');
    }

    if(!password) {
        setPasswordError('Please fill in your password');
    }

    if(email && username && password && validateEmail(email)) {
        // If all details are filled and email is valid, navigate to home page
        onSignup();
    }
  }

  return (
    <div className='signup' >
        <img src="https://i.pinimg.com/originals/d5/1d/09/d51d097fbbd5cdc277d80c605ad1c455.png" alt="logo" />

                <button className="fb-login-btn" >
                <FacebookIcon /> 
                    <span className='f'>Log in with Facebook</span>
                </button>
                
        <div className="separator">
                <div className="line"></div>
                <p>OR</p>
                <div className="line"></div>
         </div>
        <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' value={email} />
        {emailError && <p>{emailError}</p>}
        <input onChange={e => setUsername(e.target.value)} type="text " placeholder='username' value={username} />
        {usernameError && <p>{usernameError}</p>}
        <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' value={password} />
        {passwordError && <p>{passwordError}</p>}
        <button  onClick={handleSubmit}>Sign up</button>
    </div>
  )
}

export default Signup;
