import React from 'react'
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-item'>
                <span className='sidebar-title'>ABOUT ME</span>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhOmoXbnKsgjpt5aJeGPjNMPUmnopLJ1RhA&usqp=CAU' alt='' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias velit officia ipsum esse exercitationem quae consequuntur maxime dolores laboriosam dicta ipsa repellat deleniti culpa, vero voluptates nam optio commodi tempora?</p>
            </div>
            <div className='sidebar-item'>
                 <span className='sidebar-title'>CATAGORIES</span>
                 <ul className='sidebar-list'>
                     <li className='sidebar-list-item'>Life</li>
                     <li className='sidebar-list-item'>Music</li>
                     <li className='sidebar-list-item'>Style</li>
                     <li className='sidebar-list-item'>Sport</li>
                     <li className='sidebar-list-item'>Tech</li>
                     <li className='sidebar-list-item'>Cinema</li>
                 </ul>
            </div>
            <div className='sidebar-item'>
                <span className='sidebar-title'>FOLLOW US</span>
                <div className='sidebar-social'>
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
