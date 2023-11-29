import React from 'react'
import './Suggestions.css'
import { Avatar } from '@mui/material'

const Suggestions = ({name, relation}) => {
  return (
    <div className='suggestions'>
      
      <div className="suggestion_usernames">
        <div className="suggestion_username">
          <div className="username_left">
            <span className='avatar'>
            <Avatar style={{ marginRight: "10px" }}>
            {name.charAt(0).toUpperCase()}
           </Avatar>            </span>
            <div className="username_info">
              <span className="username">{name}</span>
              <span className="relation">{relation}</span>
            </div>
          </div>
          <button className="follow_btn">Follow</button>
        </div>
      </div>
      </div>
  )
}

export default Suggestions