import React from 'react'
import './post.css'
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const PF = "http://localhost:3003/images/";
    return (
        <div className='post'>
            {post.photo && <img className="post-img" src={PF + post.photo} alt="" />}
            <div className="post-info">
                <div className="post-cats">
                    {post.categories.map((c) => (
                    <span className="post-cat">{c.name}</span>
                    ))}
                </div>

                {/* Makes the post clickable through the post ID*/}

                <Link to={`/post/${post._id}`} className='link'>
                    <span className="post-title">{post.title}</span>
                </Link>
                 <hr />
                 <span className="post-date">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='post-desc'>{post.desc}</p>
        </div>
    )
}

export default Post
