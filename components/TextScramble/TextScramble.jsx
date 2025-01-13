'use client';

import { useState, useEffect } from 'react';

const symbols = '!<>-_\\/[]{}—=+*^?#'.split('');

const TextScramble = ({
  texts,
  className,
  letterSpeed = 5,
  nextLetterSpeed = 100,
  pauseTime = 1500,
  isHovered,
}) => {
  const [currentText, setCurrentText] = useState(texts[0]);
  const [displayedText, setDisplayedText] = useState(texts[0]);
  const [paused, setPaused] = useState(true);

  const leftIndexes = [];
  const randomItem = (array) => array[Math.floor(Math.random() * array.length)]

  let bakeLetterInterval = 0;
  let bakeTextInterval = 0;

  const defaultLeftIndexes = () => {
    currentText.split('').forEach((_, i) => {leftIndexes.push(i);});
  };

  const bakeLetter = () => {
    bakeLetterInterval = setInterval(() => {
      if (!paused) {
        const updatedText = [];

        currentText.split('').forEach((_, i) => {
          if (!leftIndexes.includes(i)) {
            updatedText[i] = currentText[i];
            return;
          }
          const randomSymbol = randomItem(symbols);
          updatedText[i] = randomSymbol;
        });
        setDisplayedText(updatedText.join(''));
      }
    }, letterSpeed);
  };

  const bakeText = () => {
    defaultLeftIndexes();
    bakeLetter();

    bakeTextInterval = setInterval(() => {
      if (leftIndexes.length === 0) {
        clearInterval(bakeLetterInterval);
        clearInterval(bakeTextInterval);

        setTimeout(() => {
          defaultLeftIndexes();
        }, pauseTime);
      }

      leftIndexes.shift();
    }, nextLetterSpeed);
  };

  useEffect(() => {
    if (isHovered) {
      setPaused(false);
      setCurrentText(texts[0]);
      bakeText();
    } else if (!isHovered) {
      setPaused(false);
      setCurrentText(texts[1]);
      bakeText();
    }
  }, [isHovered]); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className={className}>{displayedText}</div>;
};

export default TextScramble;