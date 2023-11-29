import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Notification.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ 
        width: 400,
        height: 1000,
        bgcolor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        overflow:'auto',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
     <div className="h">
       <h2> Notifications </h2>
      </div>
        <div className="suggestion_usernames i" >
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "10px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">Follow requests</span>
                      <span className="relation">varunrajan + 8 others</span>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
              </div>
      <Divider />
      <div className="h">
       <h3> New</h3>
      </div>
      <div className="suggestion_usernames i" >
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "5px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">rishi.prabhakar_and disneygamez</span>
                      <span className="relation">likes your comment : 😂</span>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
              </div>
      <Divider />
      <div className="h">
         <h4>This Month</h4>
        </div>
      <div className="suggestion_usernames i" >
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "5px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">suresh</span>
                      <span className="relation">likes your post</span>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "5px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">yasin</span>
                      <span className="relation">following you</span>
                    </div>
                  </div>
                  <button className='btn'>follow Back</button>
                </div>
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "5px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">sandeep</span>
                      <span className="relation">likes your post</span>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "5px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">murali</span>
                      <span className="relation">likes your post </span>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "5px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">disneygamez</span>
                      <span className="relation">likes your post : ❤</span>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "5px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">rishi.prabhakar</span>
                      <span className="relation">likes your post</span>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "5px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">sherif</span>
                      <span className="relation">likes your post</span>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "5px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">sherif</span>
                      <span className="relation">likes your post</span>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "5px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">sherif</span>
                      <span className="relation">likes your post</span>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "5px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">sherif</span>
                      <span className="relation">likes your post</span>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "5px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">sherif</span>
                      <span className="relation">likes your post</span>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "5px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">sherif</span>
                      <span className="relation">likes your post</span>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "5px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">sherif</span>
                      <span className="relation">likes your post</span>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "5px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">sherif</span>
                      <span className="relation">likes your post</span>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "5px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">sherif</span>
                      <span className="relation">likes your post</span>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "5px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">sherif</span>
                      <span className="relation">likes your post</span>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "5px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">sherif</span>
                      <span className="relation">likes your post</span>
                    </div>
                  </div>
                  <ChevronRightIcon />
                </div>
              </div>     

    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <button onClick={toggleDrawer('left', true)} className="sidenav_button">
        <FavoriteBorderIcon />
        <span className='text'>Notifications</span>
        </button>
        <Drawer
          anchor='left'
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
