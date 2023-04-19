'use client';
import Image from 'next/image';
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
  const typeOption = type === 'B' ? ' typeB' : '';
  const getClassNm =
    className == undefined
      ? { className: 'device' + typeOption }
      : { className: 'device ' + className + typeOption };

  const DEVICE_DATA = [
    { caption: caption[0], imgUrl: imgUrl[0], alt: alt },
    { caption: caption[1], imgUrl: imgUrl[1], alt: alt },
    { caption: caption[2], imgUrl: imgUrl[2], alt: alt },
  ];
  return (
    <article {...getClassNm}>
      <ElementTitle data={elementTitle} />
      <Description data={description} />
      <div className="device-img">
        {DEVICE_DATA.map((data, index) => (
          <div key={index}>
            <span>{data.caption}</span>
            <Image src={data.imgUrl} alt={data.alt} width={100} height={100} />
          </div>
        ))}
      </div>
    </article>
  );
}
