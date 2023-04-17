'use client';

import Image from 'next/image';

import Description from '@/components/Description/Description';
import Device from '@/components/Device/Device';

export default function Chaewon() {
  return (
    <>
      <Description data="discription 테스트" />
      <Device
        caption={['1.Step setting', '2.Step setting', '3.Total']}
        imgUrl={[
          '/assets/images/contents/works/img-phone-configurator1-jplatform.png',
          '/assets/images/contents/works/img-phone-configurator2-jplatform.png',
          '/assets/images/contents/works/img-phone-configurator3-jplatform.png',
        ]}
        alt={['현대자동차 J플랫폼 Step setting, Total 화면 이미지']}
      />
    </>
  );
}
