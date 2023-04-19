'use client';

// import Link from "next/link";
import Btn from '@/components/Btn/Btn';
import videoPlayBtn from '@/public/assets/images/ico/ico_btn_play.svg';
import './scss/Video.scss';

export default function Video({ videoUrl, className }) {
  const videoPlay = () => {
    document.querySelector('video').play();
    document.querySelector('video').classList.add('on');
    document.querySelector('button').classList.add('hide');
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
        onClick={videoPlay}
        children={
          <Image
            src={videoPlayBtn}
            width={60}
            height={60}
            alt="video play button"
          />
        }
      />
    </div>
  );
}
