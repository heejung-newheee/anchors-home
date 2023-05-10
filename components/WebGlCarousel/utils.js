import React from 'react';

/*------------------------------
Lerp
------------------------------*/
export const lerp = (v0, v1, t) => v0 * (1 - t) + v1 * t;

/*--------------------
Get Piramidal Index
--------------------*/
// Returns an array of decreasing index values in a pyramid shape, starting from the specified index with the highest value. These indices are often used to create overlapping effects among elements.
export const getPiramidalIndex = (array, index) => array.map((_, i) => calcHeightIdx(array, index, i));

const calcHeightIdx = (array, index, i) => {
  if (i === index) return array.length;

  if (index >= array.length && (array.length - Math.abs(index - i) < array.length / 2)) {
    return array.length - Math.abs(index - array.length - i);
  }

  if (array.length - Math.abs(index - i) < array.length / 2) {
    return (array.length - Math.abs(index - array.length - 1) - i + 1);
  }

  return array.length - Math.abs(index - i);
}

export function usePrevious(value) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}