import React, { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);

        try {
            const res = await axios.post('/auth/register', {
                username, email, password,
            });
            /* If successfully registered above. Reroute should be the login page */
            res.data && window.location.replace('/login');
         } catch (err) {
             setError(true);
         } 
    }

    return (
        <div className='register'>
            <span className="register-title">Register</span>
            <form className="register-form" onSubmit={handleSubmit}>
                
                <label>Username</label>
                <input type='text' placeholder='Enter your username..' className='register-input'
                onChange={e=>setUsername(e.target.value)}
                />
                <label>Email</label>
                <input type='text' placeholder='Enter your email..' className='register-input' 
                onChange={e=>setEmail(e.target.value)}
                />
                <label>Password</label>
                <input type='password' placeholder='Enter your password..' className='register-input' 
                onChange={e=>setPassword(e.target.value)}
                />
                <button className='register-button' type='submit'>Register</button>
                
            </form>
            <button className="register-login-button">
                 <Link className='link' to='/login'>Login</Link>
            </button>
            {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
        </div>
    )
}

export default Register