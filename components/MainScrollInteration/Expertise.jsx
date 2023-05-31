'use client';

import React, { useEffect, useState } from 'react';

import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';
import MobileScrollAnimation from '@/components/MobileScrollAnimation/MobileScrollAnimation';

import main from '@/helper/data/json/contents/main/main.json';

function Expertise({ className }) {
  const [windowWidth, setWindowWidth] = React.useState(0);

  useEffect(() => {
    const DEVICE_WIDTH = window.innerWidth;
    setWindowWidth(DEVICE_WIDTH);
  }, []);

  const GET_CLASSNAME = !className ? { className: 'scroll_expertise' } : { className: 'scroll_expertise ' + className };
  return (
    <article {...GET_CLASSNAME}>
      {windowWidth >= 1280 ? (
        <>
          <ScrollTriggerArea
            className="line1_flow scroll_expertise"
            defaultID="scroll_trigger01"
            type="multiTrigger"
            triggerStart={{
              mobile: '0',
              table: '0',
              desktop: '0',
              wide: '0',
            }}
            triggerEnd={{
              mobile: '2200vh',
              table: '2200vh',
              desktop: '5000vh',
              wide: '5000vh',
            }}
            triggerMarkers={true}
            XAxes={[
              {
                mobile: '-360vh',
                table: '-400vh',
                desktop: '-600vh',
                wide: '-600vh',
              },
            ]}
          >
            <article className="rolling_text">
              <div className="text_expertis">
                {main.service.rollingBigText[0]}
                {/* Expertise 첫번째 이미지 */}
                <ScrollTriggerArea
                  className="expertise_img"
                  defaultID="scroll_trigger02"
                  type="multiTrigger"
                  triggerStart={{
                    mobile: '-160px',
                    table: '-300px',
                    desktop: '-110px',
                    wide: '-100px',
                  }}
                  triggerEnd={{
                    mobile: '1000vh',
                    table: '1500vh',
                    desktop: '3000vh',
                    wide: '3000vh',
                  }}
                  triggerMarkers={false}
                  XAxes={[
                    {
                      mobile: '-200%',
                      table: '-200%',
                      desktop: '-200%',
                      wide: '-200%',
                    },
                  ]}
                  duration={0.01}
                >
                  <img src={main.imgUrl + main.service.blueBgRollingImages[0].image} alt={main.service.blueBgRollingImages[0].alt} />
                </ScrollTriggerArea>
                {/* Expertise 두번째 이미지 */}
                <ScrollTriggerArea
                  className="expertise_img"
                  defaultID="scroll_trigger03"
                  type="multiTrigger"
                  triggerStart={{
                    mobile: '-350px',
                    table: '-550px',
                    desktop: '-410px',
                    wide: '-550px',
                  }}
                  triggerEnd={{
                    mobile: '1000vh',
                    table: '1500vh',
                    desktop: '2000vh',
                    wide: '2000vh',
                  }}
                  triggerMarkers={false}
                  XAxes={[
                    {
                      mobile: '-200%',
                      table: '-200%',
                      desktop: '-200%',
                      wide: '-200%',
                    },
                  ]}
                  duration={0.01}
                >
                  <img src={main.imgUrl + main.service.blueBgRollingImages[1].image} alt={main.service.blueBgRollingImages[1].alt} />
                </ScrollTriggerArea>
                {/* Expertise 세번째 이미지 */}
                <ScrollTriggerArea
                  className="expertise_img"
                  defaultID="scroll_trigger04"
                  type="multiTrigger"
                  triggerStart={{
                    mobile: '0',
                    table: '-200px',
                    desktop: '-150px',
                    wide: '50px',
                  }}
                  triggerEnd={{
                    mobile: '1000vh',
                    table: '1500vh',
                    desktop: '3000vh',
                    wide: '3000vh',
                  }}
                  triggerMarkers={false}
                  XAxes={[
                    {
                      mobile: '-200%',
                      table: '-200%',
                      desktop: '-200%',
                      wide: '-200%',
                    },
                  ]}
                  duration={0.01}
                >
                  <img src={main.imgUrl + main.service.blueBgRollingImages[2].image} alt={main.service.blueBgRollingImages[2].alt} />
                </ScrollTriggerArea>
              </div>
              {/* Expertise 텍스트 영역 'e' */}
              <ScrollTriggerArea
                defaultID="scroll_trigger05"
                type="multiTrigger"
                triggerStart={{
                  mobile: '280px',
                  table: '130px',
                  desktop: '900px',
                  wide: '1200px',
                }}
                triggerEnd={{
                  mobile: '3000vh',
                  table: '4000vh',
                  desktop: '5300vh',
                  wide: '6900vh',
                }}
                triggerMarkers={false}
                fromScale={[
                  {
                    mobile: 1,
                    table: 1,
                    desktop: 1,
                    wide: 1,
                  },
                ]}
                toScale={[
                  {
                    mobile: 30,
                    table: 40,
                    desktop: 60,
                    wide: 30,
                  },
                ]}
                YAxes={[
                  {
                    mobile: '-200%',
                    table: '-150%',
                    desktop: '-200%',
                    wide: '-200%',
                  },
                ]}
                duration={0.001}
              >
                <span className="text_e">{main.service.rollingBigText[1]}</span>
              </ScrollTriggerArea>
            </article>
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
