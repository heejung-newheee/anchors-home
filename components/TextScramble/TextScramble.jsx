'use client';

import { useState, useEffect, useRef } from 'react';

const symbols = '!<>-_\\/[]{}—=+*^?#'.split('');

const TextScramble = ({
  texts,
  className,
  letterSpeed = 5,
  nextLetterSpeed = 100,
  pauseTime = 1500,
  isHovered,
  symbolsYN = true,
}) => {
  const [currentText, setCurrentText] = useState(texts[0]);
  const [displayedText, setDisplayedText] = useState(texts[0]);
  const [paused, setPaused] = useState(true);

  const leftIndexes = useRef([]);
  const bakeLetterInterval = useRef(null);
  const bakeTextInterval = useRef(null);
  const timeoutRef = useRef(null);

  const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

  const defaultLeftIndexes = () => {
    leftIndexes.current = [];
    currentText.split('').forEach((_, i) => {
      leftIndexes.current.push(i);
    });
  };

  const bakeLetter = () => {
    bakeLetterInterval.current = setInterval(() => {
      if (!paused) {
        const updatedText = [];

        currentText.split('').forEach((_, i) => {
          if (!leftIndexes.current.includes(i)) {
            updatedText[i] = currentText[i];
            return;
          }
          const randomSymbol = randomItem(symbols);
          if(symbolsYN) updatedText[i] = randomSymbol;
        });
        setDisplayedText(updatedText.join(''));
      }
    }, letterSpeed);
  };

  const bakeText = () => {
    defaultLeftIndexes();
    bakeLetter();

    bakeTextInterval.current = setInterval(() => {
      if (leftIndexes.current.length === 0) {
        clearInterval(bakeLetterInterval.current);
        clearInterval(bakeTextInterval.current);

        timeoutRef.current = setTimeout(() => {
          defaultLeftIndexes();
        }, pauseTime);
      }

      leftIndexes.current.shift();
    }, nextLetterSpeed);
  };

  useEffect(() => {
    if (isHovered) {
      setPaused(false);
      setCurrentText(texts[0]);
      bakeText();
    } else {
      setPaused(false);
      setCurrentText(texts[1]);
      bakeText();
    }

    return () => {
      clearInterval(bakeLetterInterval.current);
      clearInterval(bakeTextInterval.current);
      clearTimeout(timeoutRef.current);
    };
  }, [isHovered]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    //setDisplayedText(currentText);
  }, [currentText]);

  return <div className={className}>{displayedText}</div>;
};

export default TextScramble;