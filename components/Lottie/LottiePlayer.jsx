'use client';

import { Player, Controls } from '@lottiefiles/react-lottie-player';
const DEFAULT_STYLE = { height: '100%', width: '100%' };

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
function LottiePlayer({
  loop = true,
  autoplay = true,
  render = 'svn',
  src = '',
  style = DEFAULT_STYLE,
  visible = false,
  buttons = ['play', 'repeat', 'frame', 'debug'],
  isplay,
}) {
  const computedStyle = { ...DEFAULT_STYLE, ...style };
  console.log(isplay);
  return (
    <Player
      loop={loop}
      autoplay={autoplay}
      renderer={render}
      style={computedStyle}
      src={src}
    >
      <Controls visible={visible} buttons={buttons} />
    </Player>
  );
}

export default LottiePlayer;
