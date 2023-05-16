'use client';

import Btn from '@/components/Btn/Btn';
import './scss/Video.scss';

export default function Video({ videoUrl, className, posterImg }) {
  const VIDEO_PLAY = e => {
    const target = e.currentTarget;
    target.parentElement.classList.add('dim_off');
    target.previousSibling.play();
    target.previousSibling.classList.add('on');
    target.classList.add('hide');
  };
  const GET_CLASSNAME = !className ? { className: 'video' } : { className: 'video ' + className };
  return (
    <div {...GET_CLASSNAME}>
      <video src={videoUrl} controls poster={posterImg} />
      <Btn className="video_btn" type="button" onClick={VIDEO_PLAY}>
        <img src="/assets/images/ico/ico_btn_play.svg" alt="video play button" />
      </Btn>
    </div>
  );
}
