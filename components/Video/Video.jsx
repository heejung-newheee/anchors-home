'use client';

import Image from 'next/image';
// import Link from "next/link";
import videoPlayBtn from '@/public/assets/images/ico/ico-btn-play.svg';
import './scss/Video.scss';
import { useState } from 'react';

export default function Video({ videoUrl }) {
  const [videoBtnState, setVideoBtnState] = useState('block');
  const videoPlay = () => {
    document.querySelector('video').play();
    document.querySelector('video').classList.add('on');
    setVideoBtnState('none');
  };
  return (
    <div className="video-wrap">
      <video src={videoUrl} controls></video>

      <button
        className="video-btn"
        type="button"
        style={{ display: videoBtnState }}
        onClick={videoPlay}
      >
        <Image
          src={videoPlayBtn}
          width={60}
          height={60}
          alt="video play button"
        />
      </button>
    </div>
  );
}
