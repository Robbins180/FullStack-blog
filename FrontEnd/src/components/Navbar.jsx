import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const user = false;
    return (
        <div className='navbar'>
            <div className='top-left'>
                <i className="navIcon fab fa-facebook-square"></i>
                <i className=" navIcon fab fa-twitter-square"></i>
                <i className="navIcon fab fa-pinterest-square"></i>
                <i className="navIcon fab fa-instagram-square"></i>
            </div>
            <div className='top-center'>
                <ul className='nav-list'>
                    <li className='nav-list-item'><Link className='link' to='/' >HOME</Link></li>
                    <li className='nav-list-item'><Link className='link' to='/about' >ABOUT</Link></li>
                    <li className='nav-list-item'><Link className='link' to='/contact' >CONTACT</Link></li>
                    <li className='nav-list-item'><Link className='link' to='/write' >WRITE</Link></li>
                    <li className='nav-list-item'>
                        {user && 'LOGOUT'}
                    </li>
                </ul>
                
            </div>
            <div className='top-right'>
               {
                   user ? (
                <img 
                className='top-img ' 
                alt='top'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9tG_NFfmLde3aA3q3p2yib1KJslRRNlJQg&usqp=CAU' />
                   ) : (
                       <ul className='nav-list'>
                           <li className='nav-list-item'>
                                <Link className='link' to='/login'>LOGIN</Link>
                           </li>   
                             <li className='nav-list-item'> 
                                <Link className='link' to='/register'>REGISTER</Link>
                            </li>
                        </ul>
                   )
               }
               <i className=" navSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Navbar
