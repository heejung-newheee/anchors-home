'use client';

import React from 'react';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import Btn from '@/components/Btn/Btn';

const Introduction = ({data, imgUrl}) => {
  return (
      <section className="platform_introduction">
        <DepthTitle className="depthTitle" depthLevel="1" blindOption="visible">{data.depthTitle}</DepthTitle>
        <Description innerHTMLOption="Y" data={data.description} />
        <span className='img_area'><img src={imgUrl + data.images} alt={data.alt} /></span>
        <ul className='platform_contactUs'>
          {data.contents.map((item, index) => (
            <li key={index}>
              <Disclaimer data={item.disclaimer} />
              <ElementTitle innerHTMLOption="Y" data={item.elementTitle} />
              <Description innerHTMLOption="Y" data={item.description} />
              <Btn type='a' url={`mailto:${item.sendEmail}`}>{item.buttonText}</Btn>
            </li>
          ))}
        </ul>
      </section>
  );
};

export default Introduction;
 