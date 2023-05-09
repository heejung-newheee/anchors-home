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
function ScrollTriggerArea({
  type,
  lottieOption,
  lottieStyle,
  triggerOffset = 'top',
  triggerMarkers = false,
  triggerScrub = 0.5,
  triggerStart = DEFAULT_TRIGGER,
  triggerEnd = DEFAULT_TRIGGER,
  XAxes,
  YAxes,
  easing = 'elastic.out(0.1, 0)',
  duration = 1,
  toScale,
  fromScale,
  className,
  defaultID,
  children,
}) {
  const [isActive, setIsActive] = React.useState();

  const COMPONENTS_REF = useRef();
  const BREAKPOINT_MOBILE = useMediaQuery({ maxWidth: 768 });
  const BREAKPOINT_TABLE = useMediaQuery({ maxWidth: 1280 });
  const BREAKPOINT_DESKTOP = useMediaQuery({ maxWidth: 1536 });
  const CHILDREN_ARR = Array.isArray(children) ? children : [children];

  const SetOption = () => {
    TRIGGER_OPTION_START = triggerStart[BREAKPOINT_TYPE];
    TRIGGER_OPTION_END = triggerEnd[BREAKPOINT_TYPE];
    if (XAxes !== undefined) {
      XAxes.map(function (el, index) {
        MUTITRIGGER_OPTION_X_AXES[index] = el[BREAKPOINT_TYPE];
      });
    }

    if (YAxes !== undefined) {
      YAxes.map(function (el, index) {
        MUTITRIGGER_OPTION_Y_AXES[index] = el[BREAKPOINT_TYPE];
      });
    }

    if (toScale !== undefined) {
      toScale.map(function (el, index) {
        MUTITRIGGER_OPTION_TO_SCALE[index] = el[BREAKPOINT_TYPE];
      });
    }

    if (fromScale !== undefined) {
      fromScale.map(function (el, index) {
        MUTITRIGGER_OPTION_FROM_SCALE[index] = el[BREAKPOINT_TYPE];
      });
    }
  };

  let TRIGGER_OPTION_START;
  let TRIGGER_OPTION_END;
  let BREAKPOINT_TYPE;
  let MUTITRIGGER_OPTION_X_AXES = [];
  let MUTITRIGGER_OPTION_Y_AXES = [];
  let MUTITRIGGER_OPTION_TO_SCALE = [];
  let MUTITRIGGER_OPTION_FROM_SCALE = [];

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

  switch (type) {
    case 'lottieTrigger':
      return (
        <ScrollTrigger
          start={TRIGGER_OPTION_START + ' ' + triggerOffset}
          end={TRIGGER_OPTION_END + ' ' + triggerOffset}
          scrub={triggerScrub}
          markers={triggerMarkers}
          trigger={'.' + type}
          onEnter={(d) => {
            COMPONENTS_REF.current.controll('play');
          }}
          onLeave={(d) => {
            COMPONENTS_REF.current.controll('pause');
          }}
          onLeaveBack={(d) => {
            COMPONENTS_REF.current.controll('pause');
          }}
          onEnterBack={(d) => {
            COMPONENTS_REF.current.controll('play');
          }}
          onUpdate={(d) => {
            // console.log(d);
          }}
        >
          <Tween ease={easing} duration={duration}>
            <LottiePlayer
              ref={COMPONENTS_REF}
              className={type}
              data={lottieOption.data}
              autoplay={lottieOption.autoplay}
              loop={lottieOption.loop}
              style={lottieStyle}
            />
          </Tween>
        </ScrollTrigger>
      );

    case 'multiTrigger':
      console.log(
        'TRIGGER_OPTION_START : ',
        TRIGGER_OPTION_START,
        'TRIGGER_OPTION_END : ',
        TRIGGER_OPTION_END,
        'triggerOffset',
        triggerOffset,
        'MUTITRIGGER_OPTION_X_AXES : ',
        MUTITRIGGER_OPTION_X_AXES,
        'MUTITRIGGER_OPTION_Y_AXES : ',
        MUTITRIGGER_OPTION_Y_AXES,
        'MUTITRIGGER_OPTION_TO_SCALE : ',
        MUTITRIGGER_OPTION_TO_SCALE,
        'MUTITRIGGER_OPTION_FROM_SCALE : ',
        MUTITRIGGER_OPTION_FROM_SCALE,
      );

      return (
        <ScrollTrigger
          start={TRIGGER_OPTION_START + ' ' + triggerOffset}
          end={TRIGGER_OPTION_END + ' ' + triggerOffset}
          scrub={triggerScrub}
          markers={triggerMarkers}
          trigger={'.' + defaultID}
          onEnter={(d) => {
            setIsActive(d.isActive);
            console.log(d.isActive);
          }}
          onLeave={(d) => {
            // setIsActive(d.isActive);
          }}
          onLeaveBack={(d) => {
            setIsActive(d.isActive);
            console.log(d.isActive);
          }}
          onEnterBack={(d) => {
            //setIsActive(d.isActive);
          }}
          onUpdate={(d) => {
            // console.log(d);
          }}
        >
          <div
            className={
              'wrapper ' +
              defaultID +
              (className === undefined ? '' : ` ${className}`) +
              (isActive ? ' is_active' : '')
            }
          >
            {CHILDREN_ARR.map((contents, idx) => (
              <Tween
                to={{
                  x: MUTITRIGGER_OPTION_X_AXES[idx],
                  y: MUTITRIGGER_OPTION_Y_AXES[idx],
                  scale: MUTITRIGGER_OPTION_TO_SCALE[idx],
                }}
                from={{ scale: MUTITRIGGER_OPTION_FROM_SCALE[idx] }}
                key={idx}
                ease={easing}
                duration={duration}
              >
                {contents}
              </Tween>
            ))}
          </div>
        </ScrollTrigger>
      );
    case 'test':
      return (
        <ScrollTrigger
          start={TRIGGER_OPTION_START + ' ' + triggerOffset}
          end={TRIGGER_OPTION_END + ' ' + triggerOffset}
          scrub={triggerScrub}
          markers={triggerMarkers}
          trigger={'.' + type}
          onEnter={(d) => {
            setIsActive(d.isActive);
          }}
          onLeave={(d) => {
            setIsActive(d.isActive);
          }}
          onLeaveBack={(d) => {
            //setIsActive(d.isActive);
          }}
          onEnterBack={(d) => {
            //setIsActive(d.isActive);
          }}
          onUpdate={(d) => {
            // console.log(d);
          }}
        >
          <div className={type + (isActive ? ' is_active' : '')}>
            {CHILDREN_ARR.map((contents, idx) => (
              <div className="tweenChildren" key={idx} data-tween-index={idx}>
                {contents.props.className !== 'timeLine' ? (
                  <Tween
                    to={{
                      x: MUTITRIGGER_OPTION_X_AXES[idx],
                      y: MUTITRIGGER_OPTION_Y_AXES[idx] || '0px',
                      scale: MUTITRIGGER_OPTION_TO_SCALE[idx],
                    }}
                    from={{
                      x: '0px',
                      y: '0px',
                      scale: MUTITRIGGER_OPTION_FROM_SCALE[idx] || 1,
                    }}
                    // ease={easing}
                    //duration={duration[idx] || 1}
                  >
                    {contents}
                  </Tween>
                ) : (
                  <Timeline target={contents} key={idx}>
                    <Tween
                      from={{ scale: MUTITRIGGER_OPTION_FROM_SCALE[idx] }}
                      to={{
                        x: MUTITRIGGER_OPTION_X_AXES[idx],
                        y: MUTITRIGGER_OPTION_Y_AXES[idx],
                        //scale: MUTITRIGGER_OPTION_TO_SCALE[idx],
                      }}
                      //duration={duration[idx]}
                    />
                    <Tween
                      from={{ scale: MUTITRIGGER_OPTION_FROM_SCALE[idx] }}
                      to={{
                        x: MUTITRIGGER_OPTION_X_AXES[idx],
                        y: MUTITRIGGER_OPTION_Y_AXES[idx],
                        scale: MUTITRIGGER_OPTION_TO_SCALE[idx],
                      }}
                      //duration={duration[idx]}
                    />
                  </Timeline>
                )}
              </div>
            ))}
          </div>
        </ScrollTrigger>
      );
  }
}

export default ScrollTriggerArea;
