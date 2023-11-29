import React, { useRef, useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

import "./Reels.css";

export default function Video({url, likes, comment, shares }) {
  const [isVideoPlaying, setisVideoPlaying] = useState(false);

  const vidRef = useRef();

  const onVideoClick = () => {
    if (isVideoPlaying) {
      vidRef.current.pause();
      setisVideoPlaying(false);
    } else {
      vidRef.current.play();
      setisVideoPlaying(true);
    }
  };

  useEffect(() => {
    const scroll = document.getElementById("video-container");

    if (scroll) {
      scroll.addEventListener("scroll", () => {
        vidRef.current.pause();
      });
    }
  }, []);

  return (
    <div className="video-cards">
      <Header />
      <video
        onClick={onVideoClick}
        className="video-player"
        ref={vidRef}
        src={url}
        loop
      />
      <Footer
        likes={likes}
        comment={comment}
        shares={shares}
      />
    </div>
  );
}