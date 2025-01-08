'use client';

import React from 'react';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import Btn from '@/components/Btn/Btn';

const Introduction = ({data, imgUrl}) => {
  const { depthTitle, description, images, alt, contents } = data;

  function contactUs(){
    return contents.map((item, idx) => {
      const { disclaimer, elementTitle, description, sendEmail, buttonText } = item;
      return (
        <li key={idx}>
          <Disclaimer data={disclaimer} />
          <ElementTitle innerHTMLOption="Y" data={elementTitle} />
          <Description innerHTMLOption="Y" data={description} />
          <Btn type='a' url={`mailto:${sendEmail}`}>{buttonText}</Btn>
        </li>
      );
    });
  }

  return (
      <section className="platform_introduction">
        <DepthTitle className="depthTitle" depthLevel="1" blindOption="visible">{depthTitle}</DepthTitle>
        <Description innerHTMLOption="Y" data={description} />
        <span className='img_area'><img src={imgUrl + images} alt={alt} /></span>
        {contents && <ul className='platform_contactUs'>{contactUs()}</ul> || null}
      </section>
  );
};

export default Introduction;
 