import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='register'>
            <span className="register-title">Sign Up</span>
            <form className="register-form">
                
                <label>Username</label>
                <input type='text' placeholder='Enter your username..' className='register-input' />
                <label>Email</label>
                <input type='text' placeholder='Enter your email..' className='register-input' />
                <label>Password</label>
                <input type='password' placeholder='Enter your password..' className='register-input' />
                <button className='register-button'>Sign Up</button>
                
            </form>
            <button className="register-login-button">
                 <Link className='link' to='/login'>Login</Link>
            </button>
        </div>
    )
}

export default Register