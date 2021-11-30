import React from 'react'
import './singlePost.css'

const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className="singlePost-wrapper">
                <img 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSeY7m5faawBTjD-ztZvFjWOVnbVlAoroRzA&usqp=CAU'
                    alt='palm-trees'
                    className='singlePost-img'/>

                    <h1 className="singlePost-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        <div className="singlePost-edit">
                             <i className=" singlePostIcon far fa-edit"></i>
                             <i className=" singlePostIcon far fa-trash-alt"></i>
                        </div>
                    </h1>
                    <div className="singlePost-info">
                        <span className='singlePost-author'>Author: <b>Drew</b></span>
                        <span className='singlePost-date'> 1 hour ago</span>
                    </div>
                    <p className='singlePost-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo unde quae delectus possimus distinctio, alias illum architecto recusandae et harum voluptatum fugiat at velit. Itaque, omnis. Ut, id saepe?</p>
            </div>
        </div>
    )
}

export default SinglePost

