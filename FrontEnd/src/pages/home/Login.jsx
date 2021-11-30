import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login'>
            <span className="login-title">Login</span>
            <form className="login-form">
                <label>Email</label>
                <input type='text' placeholder='Enter your email..' className='login-input' />
                <label>Password</label>
                <input type='password' placeholder='Enter your password..' className='login-input' />
                <button className='login-button'>Login</button>
            </form>
            <button className="login-register-button">
                <Link  className='link' to='/signup'>Sign Up</Link>
            </button>
        </div>
    )
}

export default Login
