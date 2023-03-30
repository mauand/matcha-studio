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
          <button className="video-overlay-close" onClick={handleYouTubeClick}>
            x
          </button>

            <ReactPlayer
              className="video-popup"
              url="https://youtu.be/OXHCt8Ym9gw"
              playing
              width="90%"
              height="90%"
              controls={false}
            />

        </div>
      )}
      <div className="w-full h-full backdrop-brightness-[.9] rounded-xl flex justify-center items-center">
        <button
          id="play-video"
          className="video-play-button"
          onClick={handleYouTubeClick}
        >
          <span></span>
        </button>
      </div>
      ;
    </>
  );
};

export default Youtube;
