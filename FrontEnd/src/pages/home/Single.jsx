import React from 'react'
import Sidebar from '../../components/Sidebar'
import SinglePost from '../../components/SinglePost'
import './single.css'

const Single = () => {
    return (
        <div className='single'>
            <SinglePost />
            <Sidebar />
        </div>
    )
}

export default Single
