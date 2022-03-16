import React from "react";
import "./Media.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

const Media = () => {
  return (
    <div 
    style={{
      marginBottom: "25px",
      background: "#394264",
      borderRadius: "5px",
      color: "white",
    }} className="media">
      <div id="media-display">
        <a className="play" href="#23">
          <PlayArrowIcon className="play-button" />
        </a>
      </div>
      <div className="media-control-bar">
        <a className="media-btn play" href="#23">
        <PlayArrowIcon className="scnd-font-color" />
        </a>
        <p className="time-passed">
          4:15 <span style={{color: "#9099b7"}}>/ 9:23</span>
        </p>
        <a className="media-btn volume" href="#24">
          <VolumeUpIcon className="scnd-font-color" />
        </a>
        <a className="media-btn resize" href="#25">
          <CloseFullscreenIcon className="scnd-font-color" />
        </a>
      </div>
    </div>
  );
};

export default Media;
