'use client';
import './scss/ImageArray.scss';

export default function ImageArray({
  data,
  className,
  bgColor = '#FFFFFF',
  imgUrl = '',
}) {
  const GET_CLASSNAME =
    className === undefined
      ? { className: 'image_array' }
      : { className: 'image_array ' + className };
  return (
    <article {...GET_CLASSNAME} style={{ backgroundColor: bgColor }}>
      {data.map((imgs, index) => (
        <img key={index} src={imgUrl + imgs.url} alt={imgs.alt} />
      ))}
    </article>
  );
}
