
import './singlePost.css';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from "../context/Context";

const SinglePost = () => {
        const location = useLocation()
        const path = location.pathname.split('/')[2];
        const [post, setPost] = useState({});
        const PF = "http://localhost:3003/images/";
        const { user } = useContext(Context);
        const [title, setTitle] = useState("");
        const [desc, setDesc] = useState("");
        const [updateMode, setUpdateMode] = useState(false);

        useEffect(() => {
            const getPost = async () => {
                const res = await axios.get('/posts/' + path)
                setPost(res.data);
                setTitle(res.data.title);
                setDesc(res.data.desc);
            };
            getPost()
        }, [path]);

        const handleDelete = async () => {
            try {
              await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username },
              });
              window.location.replace("/");
            } catch (err) {}
          };

          const handleUpdate = async () => {
            try {
              await axios.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                desc,
              });
              setUpdateMode(false)
            } catch (err) {}
          };

          return (
            <div className="singlePost">
              <div className="singlePost-wrapper">
                {post.photo && (
                  <img src={PF + post.photo} alt="" className="singlePost-img" />
                )}
                {updateMode ? (
                  <input
                    type="text"
                    value={title}
                    className="singlePost-title-input"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                  />
                ) : (
                  <h1 className="singlePost-title">
                    {title}
                    {post.username === user?.username && (
                      <div className="singlePost-edit">
                        <i
                          className="singlePostIcon far fa-edit"
                          onClick={() => setUpdateMode(true)}
                        ></i>
                        <i
                          className="singlePostIcon far fa-trash-alt"
                          onClick={handleDelete}
                        ></i>
                      </div>
                    )}
                  </h1>
                )}
                <div className="singlePost-info">
                  <span className="singlePost-author">
                    Author:
                    <Link to={`/?user=${post.username}`} className="link">
                      <b> {post.username}</b>
                    </Link>
                  </span>
                  <span className="singlePost-date">
                    {new Date(post.createdAt).toDateString()}
                  </span>
                </div>
                {updateMode ? (
                  <textarea
                    className="singlePost-desc-input"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                ) : (
                  <p className="singlePost-desc">{desc}</p>
                )}
                {updateMode && (
                  <button className="singlePost-button" onClick={handleUpdate}>
                    Update
                  </button>
                )}
              </div>
            </div>
          );
}

export default SinglePost

