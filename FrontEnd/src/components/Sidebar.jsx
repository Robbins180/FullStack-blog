import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './sidebar.css';

const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
      const getCats = async () => {
        const res = await axios.get("/categories");
        setCats(res.data);
      };
      getCats();
    }, []);

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
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebar-list-item">{c.name}</li>
                        </Link>
                    ))}
                        {/* c is for category, maps over all possible categories */}
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
