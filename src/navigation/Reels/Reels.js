import React from "react";
import './Reels.css'
import Sidenav from '../Sidenav';
import Video from './Video'
import Vid1 from "./videos/video1.mp4";
import Vid2 from "./videos/video2.mp4";
import Vid3 from "./videos/video3.mp4";
import Vid5 from "./videos/video5.mp4";
import Vid6 from "./videos/video6.mp4";

export default function Reels() {
  const data = [
    {
      url: Vid6,
      likes: "3,222",
      comment: "229",
      shares: "232",
    },
    {
      url: Vid2,
      likes: "4,789",
      comment: "222",
      shares: "223",
    },
    {
      url: Vid3,
      likes: "89,234",
      comment: "2,223",
      shares: "2,210",
    },
    {
      url: Vid5,
      likes: "89,234",
      comment: "2,223",
      shares: "2,210",
    },
    {
      url: Vid1,
      likes: "89,234",
      comment: "2,223",
      shares: "2,210",
    },
  ];

  return (
    <div className="player-wrapper">
    <div className="sidenav">
      <Sidenav />
    </div>
    <div className="App">
      <center>
        <div className="video-container" id="video-container">
          {data.map((list, i) => (
            <Video
              key={i}
              url={list.url}
              likes={list.likes}
              comment={list.comment}
              shares={list.shares}
            />
          ))}
        </div>
      </center>
    </div>
    </div>
  );
}