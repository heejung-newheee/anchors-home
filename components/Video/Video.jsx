'use client';

import Image from 'next/image';
// import Link from "next/link";
import videoPlayBtn from '@/public/assets/images/ico/ico-btn-play.svg';
import Btn from '@/components/Btn/Btn';
import './scss/Video.scss';

export default function Video({ videoUrl, className }) {
  const videoPlay = () => {
    document.querySelector('video').play();
    document.querySelector('video').classList.add('on');
    document.querySelector('button').classList.add('hide');
  };
  const getClassNm =
    className == undefined
      ? { className: 'video' }
      : { className: 'video ' + className };
  return (
    <div {...getClassNm}>
      <video src={videoUrl} controls></video>

      <Btn
        className="video-btn"
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
