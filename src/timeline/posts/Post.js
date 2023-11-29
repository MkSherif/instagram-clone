import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import TelegramIcon from '@mui/icons-material/Telegram';


function Post({ user, postImage, likes, timestamp, comment }) {
  return (
    <div className='container'>
      <div className="post">     
      <div className="post_header">
        <div className="post_headerAuthor">
          <Avatar style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>{" "}
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post_image">
        <img src={postImage} alt="Couldn't load image. Tap to retry." />
      </div>
      <div className="post_footer">
        <div className="post_footerIcons">
          <div className="post_iconsMain">
            <FavoriteBorderIcon className="postIcon" />
            <ModeCommentOutlinedIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post_iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
         {likes} likes
      </div>
      {comment}
      <h3 className='alert'>Soon it will be update to mobile version</h3>
      <h4 className='alert k'>Thank you</h4>
    </div>
    </div>

  );
}

export default Post;