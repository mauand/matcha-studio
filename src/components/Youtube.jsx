import { React, useState } from "react";
import ReactPlayer from "react-player";

const Youtube = () => {
  const [showYoutube, setShowYoutube] = useState(false);

  const handleYouTubeClick = () => {
    setShowYoutube(!showYoutube);
  };

  return (
    <div className="h-full w-full cursor-pointer" onClick={handleYouTubeClick}>
      {showYoutube && (
        <div className="absolute top-0 left-0 h-full w-full bg-over rounded-xl">
          {/* <button aria="chiudi video presentazione" className="video-overlay-close" onClick={handleYouTubeClick}>
            x
          </button> */}
          <ReactPlayer
            className="rounded-xl overflow-hidden"
            url="https://youtu.be/y3SOMVXcDt4"
            playing
            width="100%"
            height="100%"
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
    </div>
  );
};

export default Youtube;
