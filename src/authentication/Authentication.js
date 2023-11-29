import { useState } from 'react'
import './Authentication.css'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

function Authentication() {
    const [active,setActive]= useState ("login")
    const navigate = useNavigate();

    const handleChange = () => {
        setActive(active=== "login" ? "signup" : "login")
    }

    const handleLogin = () => {
        // Navigate to home page
        navigate('/home');
    }

    const handleSignup = () => {
        // Navigate to home page
        navigate('/home');
    }

  return (
    <div className='authentication'>
        <div className="auth_left">
            <img src="https://i.imgur.com/P3Vm1Kq.png%20iwant%20same%20like%20this" alt="poster" />
        </div>
        <div className="auth_right">
            {active === "login" ? (<Login onLogin={handleLogin} />) : (<Signup onSignup={handleSignup} />)}
            <div className="auth_more">
                <span>
                {active === 'login' 
                ? ( <>Don't have an account? <button onClick={handleChange}>Sign up</button></>)
                : (<>Have an account? <button onClick={handleChange}>Log in</button></>)}
                </span>
            </div>
        </div>
    </div>
  )
}

export default Authentication;
