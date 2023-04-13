"use client";

import { Player, Controls } from '@lottiefiles/react-lottie-player';

/**
 * 로티 플레이어
 * @param loop 반복합니다.
 * @param autoplay 자동재생
 * @param render 랜더방법 : "svg","canvas"
 * @param src
 * @param style
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