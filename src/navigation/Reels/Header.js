import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import "./Reels.css";

export default function Header() {
  return (
    <div className="video-header">
      <ArrowBackIosIcon />
      <h3>Reel</h3>
      <CameraAltIcon />
    </div>
  );
}