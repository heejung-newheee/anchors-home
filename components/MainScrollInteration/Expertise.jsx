'use client';

import React, { useEffect, useState } from 'react';

import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import MobileScrollAnimation from '@/components/MobileScrollAnimation/MobileScrollAnimation';

import main from '@/helper/data/json/contents/main/main.json';

const SCROLL_TRIGGER_OPTION = {
  triggerStart: [{ mobile: '0px', table: '0px', desktop: '0px', wide: '200px' }],
  triggerEnd: [{ mobile: '0px', table: '0px', desktop: '5000vh', wide: '200px' }],
  XAxes: {
    expertiseTrigger: [
      { mobile: '0px', table: '0px', desktop: '-580vh', wide: '200px' },
      { mobile: '0px', table: '0px', desktop: '-580vh', wide: '200px' },
      { mobile: '0px', table: '0px', desktop: '-630vh', wide: '200px' },
      { mobile: '0px', table: '0px', desktop: '-620vh', wide: '200px' },
      { mobile: '0px', table: '0px', desktop: '-610vh', wide: '200px' },
    ],
  },
  fromScale: {
    expertiseFromScale: [
      { mobile: 1, table: 1, desktop: 1, wide: 1 },
      { mobile: 1, table: 1, desktop: 1, wide: 1 },
    ],
  },
  toScale: {
    expertiseToScale: [
      { mobile: 1, table: 1, desktop: 1, wide: 1 },
      { mobile: 1, table: 1, desktop: 30, wide: 30 },
    ],
  },
};

function Expertise() {
  const [windowWidth, setWindowWidth] = React.useState(0);

  useEffect(() => {
    const DEVICE_WIDTH = window.innerWidth;
    setWindowWidth(DEVICE_WIDTH);
  }, []);

  return (
    <article className="scroll_expertise">
      {windowWidth >= 1280 ? (
        <>
          <ScrollTriggerArea
            type="timeLine"
            defaultID="scroll_trigger01"
            className="expertise_wrap"
            triggerStart={SCROLL_TRIGGER_OPTION.triggerStart[0]}
            triggerEnd={SCROLL_TRIGGER_OPTION.triggerEnd[0]}
            XAxes={SCROLL_TRIGGER_OPTION.XAxes.expertiseTrigger}
            triggerOffset={'top'}
            triggerMarkers={true}
            timeLineFromScale={SCROLL_TRIGGER_OPTION.fromScale.expertiseFromScale}
            timeLineToScale={SCROLL_TRIGGER_OPTION.toScale.expertiseToScale}
          >
            <span className="expertise_text expertis">{main.service.rollingBigText[0]}</span>
            <span className="expertise_text e timeLine" style={{ width: '83.5vh' }}>
              {main.service.rollingBigText[1]}
            </span>
            <span className="expertise_img img_first_test">
              <img src={main.imgUrl + main.service.blueBgRollingImages[0].image} alt={main.service.blueBgRollingImages[0].alt} />
            </span>
            <span className="expertise_img img_second_test">
              <img src={main.imgUrl + main.service.blueBgRollingImages[1].image} alt={main.service.blueBgRollingImages[1].alt} />
            </span>
            <span className="expertise_img img_third_test">
              <img src={main.imgUrl + main.service.blueBgRollingImages[2].image} alt={main.service.blueBgRollingImages[2].alt} />
            </span>
          </ScrollTriggerArea>
        </>
      ) : (
        <MobileScrollAnimation
          firstText={main.service.rollingBigText[0]}
          secondText={main.service.rollingBigText[1]}
          scrollImage={main.service.blueBgRollingImages.map((content, idx) => (
            <img key={idx} src={main.imgUrl + content.image} alt={content.alt} />
          ))}
          scrollDuration={1000}
        />
      )}
    </article>
  );
}

export default Expertise;
