import React, { useState, useEffect } from "react";
import mp4 from "../../clips/mov_bbb.mp4";
import ogg from "../../clips/mov_bbb.ogg";
import TextAppearenceRange from "../TextAppearenceRange/TextAppearenceRange";
import { VideoCnt } from "./VideoPlayerStyles";

export default function VideoPlayer({
  changeDataOfTextArea,
  tabOfTextareas,
  currentTime,
  duration,
  setCurrentTime,
  setDuration
}) {
  const handleTimeUpdate = ({ target: { currentTime } }) => {
    setCurrentTime(currentTime.toFixed(2));
  };
  const handlePlaying = ({ target: { duration } }) => {
    setDuration(Math.floor(duration));
  };
  return (
    <VideoCnt>
      <video
        onTimeUpdate={handleTimeUpdate}
        onPlaying={handlePlaying}
        width="1000"
        controls
      >
        <source src={mp4} type="video/mp4" />
        <source src={ogg} type="video/ogg" />
        Your browser does not support HTML5 video.
      </video>
      {tabOfTextareas.map(el => (
        <TextAppearenceRange
          currentTime={currentTime}
          duration={duration}
          changeDataOfTextArea={changeDataOfTextArea}
          tabOfTextareas={tabOfTextareas}
          key={el.id}
          id={el.id}
        />
      ))}
    </VideoCnt>
  );
}
