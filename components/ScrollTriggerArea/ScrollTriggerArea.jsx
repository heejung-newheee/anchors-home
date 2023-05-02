'use client';
import React, { useRef } from 'react';
import { Tween, ScrollTrigger } from 'react-gsap';
import { useMediaQuery } from 'react-responsive';

import LottiePlayer from '@/components/LottiePlayer/LottiePlayer';

const DEFAULT_AXES = {
  mobile: ['0px'],
  table: ['0px'],
  desktop: ['0px'],
  wide: ['0px'],
};

function ScrollTriggerArea({
  type,
  lottieOption,
  lottieStyle = {},
  triggerStart = { mobile: '0px', table: '0px', desktop: '0px', wide: '0px' },
  triggerEnd = { mobile: '0px', table: '0px', desktop: '0px', wide: '0px' },
  triggerOffset = 'top',
  triggerMarkers = false,
  triggerScrub = 0.5,
  XAxes = DEFAULT_AXES,
  YAxes = DEFAULT_AXES,
  easing = 'elastic.out(0.1, 0)',
  duration = [1],
  toScale = [1],
  fromScale = [1],
  children,
}) {
  const COMPONENTS_REF = useRef();
  const BREAKPOINT_MOBILE = useMediaQuery({ maxWidth: 768 });
  const BREAKPOINT_TABLE = useMediaQuery({ maxWidth: 1280 });
  const BREAKPOINT_DESKTOP = useMediaQuery({ maxWidth: 1536 });
  const CHILDREN_ARR = Array.isArray(children) ? children : [children];

  // UncleCho : XAxes, YAxes 값 각 프로퍼티별 기본값 '0px' 유지하고 별도로 들어오는 프로퍼티만 적용하는 방식으로 변경함 (20230502)
  const rXAxes = { ...DEFAULT_AXES, ...XAxes };
  const rYAxes = { ...DEFAULT_AXES, ...YAxes };
  // ---------------------------------------------------------------------------------------- 끝

  let TRIGGER_OPTION_START = '';
  let TRIGGER_OPTION_END = '';
  let MUTITRIGGER_OPTION_XAXES;
  let MUTITRIGGER_OPTION_YAXES;

  if (BREAKPOINT_MOBILE) {
    TRIGGER_OPTION_START = triggerStart.mobile;
    TRIGGER_OPTION_END = triggerEnd.mobile;
    MUTITRIGGER_OPTION_XAXES = rXAxes.mobile;
    MUTITRIGGER_OPTION_YAXES = rYAxes.mobile;
  } else if (BREAKPOINT_TABLE) {
    TRIGGER_OPTION_START = triggerStart.table;
    TRIGGER_OPTION_END = triggerEnd.table;
    MUTITRIGGER_OPTION_XAXES = rXAxes.table;
    MUTITRIGGER_OPTION_YAXES = rYAxes.table;
  } else if (BREAKPOINT_DESKTOP) {
    TRIGGER_OPTION_START = triggerStart.desktop;
    TRIGGER_OPTION_END = triggerEnd.desktop;
    MUTITRIGGER_OPTION_XAXES = rXAxes.desktop;
    MUTITRIGGER_OPTION_YAXES = rYAxes.desktop;
  } else {
    TRIGGER_OPTION_START = triggerStart.wide;
    TRIGGER_OPTION_END = triggerEnd.wide;
    MUTITRIGGER_OPTION_XAXES = rXAxes.wide;
    MUTITRIGGER_OPTION_YAXES = rYAxes.wide;
  }

  let TRIGGER_OPTION = {
    start: TRIGGER_OPTION_START + ' ' + triggerOffset,
    end: TRIGGER_OPTION_END + ' ' + triggerOffset,
    markers: triggerMarkers,
    scrub: triggerScrub,
  };

  switch (type) {
    case 'lottieTrigger':
      TRIGGER_OPTION = {
        ...TRIGGER_OPTION,
        trigger: '.' + type,
        onEnter: (d) => {
          COMPONENTS_REF.current.controll('play');
          console.log('play');
        },
        onLeave: () => {
          COMPONENTS_REF.current.controll('pause');
          console.log('pause');
        },
        onUpdate: (d) => {
          // console.log(d);
        },
      };
      return (
        <>
          <Tween
            to={{
              scrollTrigger: TRIGGER_OPTION,
            }}
            ease={easing}
            duration={duration}
          >
            <LottiePlayer
              ref={COMPONENTS_REF}
              className={type}
              data={lottieOption.data}
              autoplay={lottieOption.autoplay}
              loop={lottieOption.loop}
              style={lottieStyle}
            />
          </Tween>
        </>
      );

    case 'multiTrigger':
      return (
        <>
          <ScrollTrigger
            start={TRIGGER_OPTION_START + ' ' + triggerOffset}
            end={TRIGGER_OPTION_END + ' ' + triggerOffset}
            scrub={triggerScrub}
            markers={triggerMarkers}
          >
            {CHILDREN_ARR.map((contents, idx) => (
              <Tween
                to={{
                  x: MUTITRIGGER_OPTION_XAXES[idx],
                  y: MUTITRIGGER_OPTION_YAXES[idx],
                  scale: toScale[idx],
                }}
                from={{ scale: fromScale[idx] }}
                key={idx}
                ease={easing}
                duration={duration[idx]}
              >
                {contents}
              </Tween>
            ))}
          </ScrollTrigger>
        </>
      );
  }
}

export default ScrollTriggerArea;
