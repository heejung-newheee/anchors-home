"use client";

import { Player, Controls } from '@lottiefiles/react-lottie-player';
function LottiePlayer(props) {
  return (
    <div className="bg-green-500" style={{"backgroundColor" : "#1D1D1F"}}>
    <Player
      autoplay
      loop
      renderer={"svg"}
      style={props.style}
      src={props.src}
    ></Player>
      </div>
  )
}

export default LottiePlayer;