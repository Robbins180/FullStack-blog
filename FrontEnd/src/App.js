
import './App.css';
import Navbar from './components/Navbar.jsx'
import Home from './pages/home/Home.jsx'
import Single from './pages/home/Single.jsx'
import Write from './pages/home/Write.jsx'
import Settings from './pages/home/Settings.jsx'
import Login from './pages/home/Login.jsx'
import Register from './pages/home/Register.jsx'
import { useContext } from "react";
import { Context } from "./context/Context";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  const { user } = useContext(Context);
  return (
      <Router>
        <Navbar /> 
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/register' element={user ? <Home /> : <Register />} />
            <Route path='/login' element={user ? <Home /> :<Login/>} />
            <Route path='/write' element={user ? <Write/> : <Register />} />
            <Route path='/settings' element={user ? <Settings/> : <Register />} /> 
            <Route path='/post/:postId' element={<Single/>} /> 
          </Routes>
     </Router>
  );
}

export default App;
