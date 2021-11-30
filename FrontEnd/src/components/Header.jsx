import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-titles'>
                <span className='header-titles-sm'>React & Node</span>
                <span className='header-titles-bg'>Blog</span>
            </div> 
            <img 
                className='header-img'
                src='https://wallpaperaccess.com/full/1769725.jpg'
                alt='' />

        </div>
    )
}

export default Header
