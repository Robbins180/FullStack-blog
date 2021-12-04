
import './navbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../context/Context'

const Navbar = () => {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
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
                    <li className='nav-list-item' onClick={handleLogout}>
                        {user && 'LOGOUT'}
                    </li>
                </ul>
                
            </div>
            <div className='top-right'>
               {
                   user ? (
                <img 
                className='top-img ' 
                alt='Profile Picture'
                src={user.profilePic} />
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
