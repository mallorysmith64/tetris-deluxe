import React from 'react'
import AudioPlayer from "react-h5-audio-player";
import Tetris from './Tetris theme song [10 hours]-9Fv5cuYZFC0.mp4'

const Audio = () => (
  <section className="audio-player">
    <AudioPlayer
      src={Tetris}
      onPlay={e => console.log("onPlay")}
    />
  </section>
  );

  export default Audio