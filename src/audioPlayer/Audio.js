import React, { useEffect, useRef } from 'react';
import themesong from './Tetris_Theme_Song.webm';

const Audio = ({ playing }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (playing) {
      audioRef.current.play().catch(error => {
        console.log("Audio playback failed:", error);
      });
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Restart track when stopped
    }
  }, [playing]);

  return (
    <audio ref={audioRef} loop>
      <source src={themesong} type="audio/webm" />
    </audio>
  );
};

export default Audio;