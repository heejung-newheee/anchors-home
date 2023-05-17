'use client';
import React, { useRef, useState } from 'react';
import { Tween, ScrollTrigger, Timeline } from 'react-gsap';
import { useMediaQuery } from 'react-responsive';

import LottiePlayer from '@/components/LottiePlayer/LottiePlayer';

const DEFAULT_TRIGGER = {
  mobile: '0px',
  table: '0px',
  desktop: '0px',
  wide: '0px',
};

function ScrollTriggerArea({
  triggerStart,
  triggerEnd,
  triggerOffset = 'top',
  triggerMarkers = false,
  triggerScrub = 0.5,
  easing = 'elastic.out(0.1, 0)',
  duration = 1,
  type = 'multiTrigger',
  lottieOption,
  lottieStyle,
  XAxes,
  YAxes,
  toScale,
  fromScale,
  defaultID,
  className,
  children,
}) {
  const COMPONENTS_REF = useRef();
  const [isActive, setIsActive] = useState();
  const BREAKPOINT_MOBILE = useMediaQuery({ maxWidth: 767 });
  const BREAKPOINT_TABLE = useMediaQuery({ maxWidth: 1279 });
  const BREAKPOINT_DESKTOP = useMediaQuery({ maxWidth: 1535 });
  const CHILDREN_ARR = Array.isArray(children) ? children : [children];

  let TRIGGER_OPTION_START;
  let TRIGGER_OPTION_END;
  let BREAKPOINT_TYPE;
  let MUTITRIGGER_OPTION_X_AXES = [];
  let MUTITRIGGER_OPTION_Y_AXES = [];
  let MUTITRIGGER_OPTION_TO_SCALE = [];
  let MUTITRIGGER_OPTION_FROM_SCALE = [];

  function BreakPoint() {
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
  }

  function SetOption() {
    !triggerStart || triggerStart === '' ? (triggerStart = DEFAULT_TRIGGER) : (TRIGGER_OPTION_START = triggerStart[BREAKPOINT_TYPE]);
    !triggerEnd || triggerEnd === '' ? (triggerEnd = DEFAULT_TRIGGER) : (TRIGGER_OPTION_END = triggerEnd[BREAKPOINT_TYPE]);

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
  }

  BreakPoint();

  function TweenComponents() {
    switch (type) {
      case 'lottieTrigger':
        return (
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
        );

      case 'multiTrigger':
        return (
          <div
            className={
              'wrapper ' +
              (!defaultID || defaultID === '' ? '' : ` ${defaultID}`) +
              (!className || className === '' ? '' : ` ${className}`) +
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
        );
      case 'test':
        return (
          <div
            className={
              'wrapper' +
              (!defaultID || defaultID === '' ? '' : ` ${defaultID}`) +
              (!className || className === '' ? '' : ` ${className}`) +
              (isActive ? ' is_active' : '')
            }
          >
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
        );
    }
  }

  return (
    <ScrollTrigger
      start={TRIGGER_OPTION_START + ' ' + triggerOffset}
      end={TRIGGER_OPTION_END + ' ' + triggerOffset}
      scrub={triggerScrub}
      markers={triggerMarkers}
      trigger={type === 'lottieTrigger' ? '.' + type : '.' + defaultID}
      onEnter={d => {
        setIsActive(d.isActive);
        if (type === 'lottieTrigger') {
          COMPONENTS_REF.current.controll('play');
        }
      }}
      onLeave={d => {
        if (type === 'lottieTrigger') {
          COMPONENTS_REF.current.controll('pause');
        }
      }}
      onLeaveBack={d => {
        setIsActive(d.isActive);
        if (type === 'lottieTrigger') {
          COMPONENTS_REF.current.controll('pause');
        }
      }}
      onEnterBack={d => {
        if (type === 'lottieTrigger') {
          COMPONENTS_REF.current.controll('play');
        }
      }}
      onUpdate={d => {}}
    >
      {TweenComponents()}
    </ScrollTrigger>
  );
}

export default ScrollTriggerArea;
