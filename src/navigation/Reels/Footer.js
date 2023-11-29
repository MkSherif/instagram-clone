import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import TelegramIcon from '@mui/icons-material/Telegram';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./Reels.css";

export default function Footer({ likes, comment, shares }) {
  return (
    <div className="video-footer">
      <div className="footer-buttons">
        <div className="flex-box">
          <FavoriteIcon />
          {likes}
        </div>
        <div className="flex-box">
          <CommentIcon />
          {comment}
        </div>
        <div className="flex-box">
          <TelegramIcon />
          {shares}
        </div>
        <div className="flex-box">
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
}
