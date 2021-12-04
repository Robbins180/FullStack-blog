import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';

const Login = () => {

    const userRef = userRef()
    const passwordRef = passwordRef()
    const { dispatch, isFetching } = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefualt()
        dispatch({type: "LOGIN_START"})
    }
    return (
        <div className='login'>
            <span className="login-title">Login</span>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type='text' placeholder='Enter your username..' className='login-input' ref={userRef} />
                <label>Password</label>
                <input type='password' placeholder='Enter your password..' className='login-input' ref={passwordRef} />
                <button className='login-button' type='submit'>Login</button>
            </form>
            <button className="login-register-button">
                <Link  className='link' to='/register'>Register</Link>
            </button>
        </div>
    )
}

export default Login
