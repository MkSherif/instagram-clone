import React from 'react'
import './Sidenav.css'
import {RiThreadsLine} from 'react-icons/ri';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Create from './Create/Create';
import More from './More/More';
import Search from './search/Search';
import Notification from './Notification/Notification';
import { useNavigate } from 'react-router-dom';


const Sidenav = () => {
  const navigate = useNavigate();

  return (
    <div className="sidenav">
      <img className='sidenav_logo' 
      src="https://i.pinimg.com/originals/d5/1d/09/d51d097fbbd5cdc277d80c605ad1c455.png" 
      alt="logo" />

      <div className="sidenav_buttons">
        <button className="sidenav_button"  onClick={() => navigate('/home')}>
          <HomeIcon />
          <span className='text'>Home</span>
        </button>


          <span className='text'><Search /></span>
       

        <button className="sidenav_button" onClick={() => navigate('/explore')}>
          <ExploreOutlinedIcon />
          <span className='text'>Explore</span>
        </button>

        <button className="sidenav_button" onClick={() => navigate('/reels')}>
          <OndemandVideoIcon />
          <span className='text'>Reels</span>
        </button>

        <button className="sidenav_button" onClick={() => navigate('/message')}>
          <MessageIcon  />
          <span className='text'>Messages</span>
        </button>

       
          <span className='text'>< Notification /></span>

         
          <span className='text'><Create /></span>
  

       <button className="sidenav_button"  onClick={() => navigate('/profile')}>
         <AccountCircleIcon />
         <span className='text'>Profile</span>
       </button>

      </div>
      
      <div className="sidenav_more">

        <button className="sidenav_button thread">
          <RiThreadsLine />
          <span className='text'>Threads</span>
        </button>

      
          <span className='text'><More /></span>


      </div>
    </div>

  )
}

export default Sidenav;