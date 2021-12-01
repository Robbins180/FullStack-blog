import { useEffect, useState } from 'react'
import './home.css'
import Header from '../../components/Header'
import Posts from '../../components/Posts'
import Sidebar from '../../components/Sidebar'
import axios from 'axios';

const Home = () => { 
    const [ posts , setPost] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
           const res = await axios.get('/posts')
           setPost(res.data)
        }
        fetchPost()
    },[])

    return (
        <>
            <Header />
            <div className='home'>
                <Posts posts={posts} />
                <Sidebar />       
            </div>
        </>
    )
}

export default Home
