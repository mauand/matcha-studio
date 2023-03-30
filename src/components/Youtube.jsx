import { React, useState } from "react";
import ReactPlayer from "react-player";

const Youtube = () => {
  const [showYoutube, setShowYoutube] = useState(false);

  const handleYouTubeClick = () => {
    setShowYoutube(!showYoutube);
  };

  return (
    <>
      {showYoutube && (
        <div className="fixed top-0 left-0 h-full w-full bg-over">
          <button aria="chiudi video presentazione" className="video-overlay-close" onClick={handleYouTubeClick}>
            x
          </button>
          <ReactPlayer
            className="video-popup"
            url="https://youtu.be/y3SOMVXcDt4"
            playing
            width="95%"
            height="95%"
            controls={false}
          />
        </div>
      )}

        <button
          id="play-video"
          aria="apri video presentazione"
          className="video-play-button"
          onClick={handleYouTubeClick}
        >
          <span></span>
        </button>

      ;
    </>
  );
};

export default Youtube;
