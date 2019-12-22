import React from 'react'
import AudioPlayer from "react-h5-audio-player";
import Tetris from './Tetris_Theme_Song.webm'

const Audio = () => (
  <section className="audio-player">
    <AudioPlayer
      src={Tetris}
      onPlay={e => console.log("onPlay")}
    />
  </section>
  );

  export default Audio