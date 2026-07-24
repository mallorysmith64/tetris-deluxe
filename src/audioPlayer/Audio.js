import React, { useEffect, useRef } from 'react';
import themesong from './Tetris_Theme_Song.webm';

const Audio = ({ playing }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // AbortError fires when play() is interrupted by a pause() call
          // right after it (e.g. rapid state changes) - safe to ignore.
          if (error.name !== 'AbortError') {
            console.log("Audio playback failed:", error);
          }
        });
      }
    } else {
      audio.pause();
      audio.currentTime = 0; // restart track for the next game
    }
  }, [playing]);

  return (
    <audio ref={audioRef} loop>
      <source src={themesong} type="audio/webm" />
    </audio>
  );
};

export default Audio;