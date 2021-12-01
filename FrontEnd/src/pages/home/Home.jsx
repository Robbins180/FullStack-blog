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
           console.log(res);
        }
        fetchPost()
    },[])

    return (
        <>
            <Header />
            <div className='home'>
                <Posts />
                <Sidebar />       
            </div>
        </>
    )
}

export default Home
