'use client';

// import Link from "next/link";
import Btn from '@/components/Btn/Btn';
import './scss/Video.scss';

export default function Video({ videoUrl, className }) {
  const VIDEO_PLAY = () => {
    document.querySelector('.video').classList.add('dim_off');
    document.querySelector('video').play();
    document.querySelector('video').classList.add('on');
    document.querySelector('button.video_btn').classList.add('hide');
  };
  const GET_CLASSNAME =
    className == undefined
      ? { className: 'video' }
      : { className: 'video ' + className };
  return (
    <div {...GET_CLASSNAME}>
      <video src={videoUrl} controls />
      <Btn
        className="video_btn"
        type="button"
        onClick={VIDEO_PLAY}
        children={
          <img
            src="/assets/images/ico/ico_btn_play.svg"
            alt="video play button"
          />
        }
      />
    </div>
  );
}
