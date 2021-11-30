import React from 'react'
import './settings.css'
import Sidebar from '../../components/Sidebar'

const Settings = () => {
    return (
        <div className='settings'>
            <div className="settings-wrapper">
                <div className="settings-title">
                    <span className="settings-update-title">Update Your Account</span>
                    <span className="settings-delete-title">Delete Your Account</span>
                </div>
                <form action="" className="settings-form">
                    <label>Profile Picture</label>
                    <div className="settings-profile-pic">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_dXsSkJVi3c55l7skxHe3xBRhOO195jnlw&usqp=CAU" alt="profile picture"/>

                        <label htmlFor='file-input'>
                            <i class=" settings-profile-pic-icon far fa-user-circle"></i>
                        </label>  
                        <input type="file" 
                                id='file-input'
                                style={{display:"none"}} />       
                    </div>

                    <label>Username</label>
                    <input type="text" placeholder='Drew' />
                    <label>Email</label>
                    <input type="email" placeholder='aRobbins180@gmail.com' />
                    <label>Password</label>
                    <input type="password"  />
                    <button className='settings-submit'>Update</button>
                            
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
