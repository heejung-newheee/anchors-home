'use client';
import React, { useRef } from 'react';
import { Tween, ScrollTrigger, Timeline } from 'react-gsap';
import { useMediaQuery } from 'react-responsive';

import LottiePlayer from '@/components/LottiePlayer/LottiePlayer';

const DEFAULT_TRIGGER = {
  mobile: '0px',
  table: '0px',
  desktop: '0px',
  wide: '0px',
};
const DEFAULT_AXES = [
  { mobile: '0px', table: '0px', desktop: '0px', wide: '0px' },
];

const DEFAULT_SCALE = [{ mobile: 0, table: 0, desktop: 0, wide: 0 }];

function ScrollTriggerArea({
  type,
  lottieOption,
  lottieStyle,
  triggerOffset = 'top',
  triggerMarkers = false,
  triggerScrub = 0.5,
  triggerStart = DEFAULT_TRIGGER,
  triggerEnd = DEFAULT_TRIGGER,
  XAxes = DEFAULT_AXES,
  YAxes = DEFAULT_AXES,
  easing = 'elastic.out(0.1, 0)',
  duration = DEFAULT_SCALE,
  toScale = DEFAULT_SCALE,
  fromScale = DEFAULT_SCALE,
  children,
}) {
  const [isActive, setIsActive] = React.useState();

  const COMPONENTS_REF = useRef();
  const BREAKPOINT_MOBILE = useMediaQuery({ maxWidth: 768 });
  const BREAKPOINT_TABLE = useMediaQuery({ maxWidth: 1280 });
  const BREAKPOINT_DESKTOP = useMediaQuery({ maxWidth: 1536 });
  const CHILDREN_ARR = Array.isArray(children) ? children : [children];

  // UncleCho : XAxes, YAxes 값 각 프로퍼티별 기본값 '0px' 유지하고 별도로 들어오는 프로퍼티만 적용하는 방식으로 변경함 (20230502)
  const TRIGGER_START = { ...DEFAULT_TRIGGER, ...triggerStart };
  const TRIGGER_END = { ...DEFAULT_TRIGGER, ...triggerEnd };

  const SetOption = () => {
    TRIGGER_OPTION_START = TRIGGER_START[BREAKPOINT_TYPE];
    TRIGGER_OPTION_END = TRIGGER_END[BREAKPOINT_TYPE];
    XAxes.map(function (i, index) {
      MUTITRIGGER_OPTION_X_AXES[index] = i[BREAKPOINT_TYPE];
    });

    YAxes.map(function (i, index) {
      MUTITRIGGER_OPTION_Y_AXES[index] = i[type];
    });
  };

  let TRIGGER_OPTION_START;
  let TRIGGER_OPTION_END;
  let BREAKPOINT_TYPE;
  let MUTITRIGGER_OPTION_X_AXES = [];
  let MUTITRIGGER_OPTION_Y_AXES = [];

  if (BREAKPOINT_MOBILE) {
    BREAKPOINT_TYPE = 'mobile';
  } else if (BREAKPOINT_TABLE) {
    BREAKPOINT_TYPE = 'table';
  } else if (BREAKPOINT_DESKTOP) {
    BREAKPOINT_TYPE = 'desktop';
  } else {
    BREAKPOINT_TYPE = 'wide';
  }

  SetOption();

  function TweenComponents() {
    switch (type) {
      case 'lottieTrigger':
        return (
          <Tween
            ease={easing}
            // duration={duration[0]}
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
        );

      case 'multiTrigger':
        return (
          <section className={type + (isActive ? ' isActive' : '')}>
            {CHILDREN_ARR.map((contents, idx) => (
              <Tween
                to={{
                  x: MUTITRIGGER_OPTION_X_AXES[idx],
                  y: MUTITRIGGER_OPTION_Y_AXES[idx],
                  //scale: toScale[idx],
                }}
                //from={{ scale: fromScale[idx] }}
                key={idx}
                ease={easing}
                //duration={duration[idx]}
              >
                {contents}
              </Tween>
            ))}
          </section>
        );
      case 'test':
        return (
          <section className={type + (isActive ? ' isActive' : '')}>
            {CHILDREN_ARR.map((contents, idx) => (
              <div className="tweenChildren" key={idx} data-tween-index={idx}>
                {contents.props.className !== 'timeLine' ? (
                  <Tween
                    to={{
                      x: MUTITRIGGER_OPTION_X_AXES[idx],
                      y: MUTITRIGGER_OPTION_Y_AXES[idx] || '0px',
                      scale: toScale[idx],
                    }}
                    from={{
                      x: '0px',
                      y: '0px',
                      scale: fromScale[idx] || 1,
                    }}
                    // ease={easing}
                    //duration={duration[idx] || 1}
                  >
                    {contents}
                  </Tween>
                ) : (
                  <Timeline target={contents} key={idx}>
                    <Tween
                      from={{ scale: fromScale[idx] }}
                      to={{
                        x: MUTITRIGGER_OPTION_X_AXES[idx],
                        y: MUTITRIGGER_OPTION_Y_AXES[idx],
                        //scale: toScale[idx],
                      }}
                      //duration={duration[idx]}
                    />
                    <Tween
                      from={{ scale: fromScale[idx] }}
                      to={{
                        x: MUTITRIGGER_OPTION_X_AXES[idx],
                        y: MUTITRIGGER_OPTION_Y_AXES[idx],
                        scale: toScale[idx],
                      }}
                      //duration={duration[idx]}
                    />
                  </Timeline>
                )}
              </div>
            ))}
          </section>
        );
    }
  }

  return (
    <ScrollTrigger
      start={TRIGGER_OPTION_START + ' ' + triggerOffset}
      end={TRIGGER_OPTION_END + ' ' + triggerOffset}
      scrub={triggerScrub}
      markers={triggerMarkers}
      trigger={'.' + type}
      onEnter={(d) => {
        setIsActive(d.isActive);
        if (type == 'lottieTrigger') COMPONENTS_REF.current.controll('play');
      }}
      onLeave={(d) => {
        setIsActive(d.isActive);
        if (type == 'lottieTrigger') COMPONENTS_REF.current.controll('pause');
      }}
      onLeaveBack={(d) => {
        //setIsActive(d.isActive);
        if (type == 'lottieTrigger') COMPONENTS_REF.current.controll('pause');
      }}
      onEnterBack={(d) => {
        //setIsActive(d.isActive);
        if (type == 'lottieTrigger') COMPONENTS_REF.current.controll('play');
      }}
      onUpdate={(d) => {
        // console.log(d);
      }}
    >
      {TweenComponents()}
    </ScrollTrigger>
  );
}

export default ScrollTriggerArea;
