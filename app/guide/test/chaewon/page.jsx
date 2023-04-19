'use client';

import Image from 'next/image';

import Description from '@/components/Description/Description';
import Device from '@/components/Device/Device';

export default function Chaewon() {
  return (
    <>
      <Description data="discription 테스트" />
      <Device
        elementTitle={['Configurator']}
        description={[
          '3D Configurator 및 쇼룸을 통해 원하는 ',
          <br className="mo" />,
          '차량 커스텀 및 간접적 체험이 가능하고, ',
          <br className="mo" />,
          '예상 견적을 제공합니다.',
        ]}
        caption={['1.Step setting', '2.Step setting', '3.Total']}
        imgUrl={[
          '/assets/images/contents/works/img_phone_configurator1_jplatform.png',
          '/assets/images/contents/works/img_phone_configurator2_jplatform.png',
          '/assets/images/contents/works/img_phone_configurator3_jplatform.png',
        ]}
        alt={['현대자동차 J플랫폼 Step setting, Total 화면 이미지']}
        type="A"
      />
    </>
  );
}
