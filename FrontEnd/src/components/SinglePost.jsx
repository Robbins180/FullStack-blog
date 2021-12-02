
import './singlePost.css';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SinglePost = () => {
        const location = useLocation()
        const path = location.pathname.split('/')[2];
        const [post, setPost] = useState({});

        useEffect(() => {
            const getPost = async () => {
                const res = await axios.get('/posts/' + path)
                setPost(res.data);
            };
            getPost()
        }, [path]);

    return (
        <div className='singlePost'>
            <div className="singlePost-wrapper">
                    {post.photo && (
                    <img 
                        src={post.photo}
                        alt='photos'
                        className='singlePost-img'
                    />
                    )}
                    <h1 className="singlePost-title">{post.title}
                        <div className="singlePost-edit">
                             <i className=" singlePostIcon far fa-edit"></i>
                             <i className=" singlePostIcon far fa-trash-alt"></i>
                        </div>
                    </h1>
                    <div className="singlePost-info">
                        <span className="singlePost-author">
                            Author:
                            <Link to={`/?user=${post.username}`} className="link">
                            <b> {post.username}</b>
                            </Link>
                        </span>
                        <span className='singlePost-date'>{new Date(post.createdAt).toDateString()}</span>
                    </div>
                    <p className='singlePost-desc'>{post.desc}</p>
               
            </div>
        </div>
    )
}

export default SinglePost

