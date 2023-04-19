'use client';

import Link from 'next/link';

import './scss/Device.scss';
import Description from '@/components/Description/Description';
import ElementTitle from '@/components/ElementTitle/ElementTitle';

export default function Device({
  elementTitle,
  description,
  imgUrl,
  alt,
  caption,
  className,
  type = 'A',
}) {
  const TYPE_OPTION = type === 'B' ? ' type_b' : '';
  const GET_CLASS_NM =
    className == undefined
      ? { className: 'device' + TYPE_OPTION }
      : { className: 'device ' + className + TYPE_OPTION };

  const DEVICE_DATA = [
    { caption: caption[0], imgUrl: imgUrl[0], alt: alt },
    { caption: caption[1], imgUrl: imgUrl[1], alt: alt },
    { caption: caption[2], imgUrl: imgUrl[2], alt: alt },
  ];
  return (
    <article {...GET_CLASS_NM}>
      <ElementTitle data={elementTitle} />
      <Description data={description} />
      <div className="device-img">
        {DEVICE_DATA.map((data, index) => (
          <div key={index}>
            <span>{data.caption}</span>
            <img src={data.imgUrl} alt={data.alt} />
          </div>
        ))}
      </div>
    </article>
  );
}
