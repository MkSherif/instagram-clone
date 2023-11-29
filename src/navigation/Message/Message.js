import React from 'react';
import Sidenav from '../Sidenav';
import './Message.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material'
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

const users = [
  { name: "Mohan", relation: 'Active 2m ago ' },
  { name: 'Karthik', relation: 'Active 10m ago ' }, 
  { name: 'Neha', relation: 'Active 25m ago ' },
  { name: 'Priya', relation: 'Active 1h ago' }, 
  { name: 'Anjali', relation: 'Active 1h ago' },  
  { name: 'Vikram', relation: 'Active 3h ago' }, 
  { name: 'Raj', relation: 'Active 6h ago' },
  { name: 'Lakshmi', relation: 'Active 8h ago' },
  { name: 'Sherif', relation: 'Active 12h ago' },
  { name: 'Yasin', relation: 'Active 12h ago' },

];

const Message = () => {
  return (
    <div className="container">
      <div className="sidenav">
        <Sidenav />
      </div> 
      <div className='message' style={{ display: 'flex' }}>
        <div style={{ width: '30%', borderRight: '1px solid grey', padding: '10px' }}>
          <div className='message_request'>
          <h2>Mk_sherif  <ExpandMoreIcon/> </h2>
          <EditNoteOutlinedIcon style={{ fontSize: 40 }}/>
          </div>
          <div className="message_request">
            <h3>Messages</h3> <p>Requests</p>
          </div>
          <div className='suggestions'>
            {users.map((user, index) => (
              <div className="suggestion_usernames" key={index}>
                <div className="suggestion_username">
                  <div className="username_left">
                    <span className='avatar'>
                      <Avatar style={{ marginRight: "10px" }}></Avatar>
                    </span>
                    <div className="username_info">
                      <span className="username">{user.name}</span>
                      <span className="relation">{user.relation}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: '70%', padding: '10px', display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
        <MapsUgcIcon style={{ fontSize: 60 }} />
          <div className='message_your'>
            <h2>Your Message</h2> 
            <p>Send private photos and messages to a friend or group</p>
          </div>
          <button className='btn'>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Message;
