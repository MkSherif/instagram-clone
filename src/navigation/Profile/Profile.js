import React from 'react';
import './profile.css'
import Sidenav from '../Sidenav';
import { Avatar } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';

const Profile = () => {
  return (
    <div className="container">
      <div className="sidenav">
        <Sidenav />
      </div>
      <div className="profile_user">
        <div className="profile_header">
          <div className="profile_img">
            <Avatar></Avatar>
          </div>
          <h2 className='user_name'>Mk_sherif</h2>
        </div>
        <div className="profile_details">
          <h4><strong>Posts:</strong> 5</h4>
          <h4><strong>Followers:</strong> 300k</h4>
          <h4><strong>Following:</strong> 420</h4>
        </div>
        <p className="bio">Coding my way through life 🖥️🚀 <br/>
Lover of all things tech 🔍</p>
        <div className="profile_buttons">
          <button>Edit Profile</button>
          <button>View Archive</button>
          <SettingsIcon />
        </div>
        <hr />
        <h2 className="posts-heading">Posts</h2>
        <div className="posts-img">
          <img src="https://bestanimations.com/Earth&Space/Earth/earth2/large-earth-flyover-animated-gif-2.gif" alt="post" />
          <img src="https://25.media.tumblr.com/tumblr_lnxz7zGUan1qj73e2o1_500.gif" alt="post" />
          <img src="https://c.tenor.com/YERCu0zddkIAAAAC/stars-galaxy.gif" alt="post" />
          <img src="https://th.bing.com/th/id/OIP.LwBAG-p8JbfgUWTCBVD2xgHaI-?rs=1&pid=ImgDetMain" alt="post" />
          <img src="https://i.pinimg.com/originals/f3/45/6d/f3456d8dae7c19d34f416788e8adc8e8.jpg" alt="post" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
