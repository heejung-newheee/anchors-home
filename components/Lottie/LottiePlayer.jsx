"use client";

import { Player, Controls } from '@lottiefiles/react-lottie-player';

/**
 * LOTTIE OPTION
 * @param loop
 * @param autoplay
 * @param render
 * @param src
 * @param style
 * @param visible
 * @param buttons
 * @returns {JSX.Element}
 * @constructor
 */

function LottiePlayer({loop =true, autoplay=true, render="svn", src, style={}, visible=false}, buttons=['play', 'repeat', 'frame', 'debug']) {
  return (
    <Player
      loop={loop}
      autoplay={autoplay}
      renderer={render}
      style={style}
      src={src}
    >
      <Controls
        visible={visible}
        buttons={buttons}
      />
    </Player>
  )
}

export default LottiePlayer;