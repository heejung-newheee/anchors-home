'use client';
import './scss/Description.scss';

export default function Description({
  data,
  className,
  innerHTMLOption = 'N',
}) {
  const GET_CLASSNAME = !className
    ? { className: 'description' }
    : { className: 'description ' + className };
  return innerHTMLOption === 'Y' ? (
    <p dangerouslySetInnerHTML={{ __html: data }} {...GET_CLASSNAME} />
  ) : (
    <p {...GET_CLASSNAME}>{data}</p>
  );
}
