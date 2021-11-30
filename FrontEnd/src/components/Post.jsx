import React from 'react'
import './post.css'

const Post = () => {
    return (
        <div className='post'>
            <img className ='post-img'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqOMKrBaUdbgvm6PACS3vDtit1W_tRXY8pw&usqp=CAU'
                alt='dog' />
            <div className="post-info">
                <div className="post-cats">
                    <span className='post-cat'>Music</span>
                    <span className='post-cat'>Life</span>
                </div>
                 <span className="post-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 </span>
                 <hr />
                 <span className="post-date">1 hour ago</span>
            </div>
            <p className='post-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, placeat qui, quia eaque iusto iure saepe, maiores sed natus non reiciendis distinctio laboriosam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit ullam et voluptatibus in sequi deserunt. Ex consectetur quidem cumque sapiente nihil distinctio maiores dolorem doloribus? Repellat, vero! Sapiente, asperiores.</p>
        </div>
    )
}

export default Post
