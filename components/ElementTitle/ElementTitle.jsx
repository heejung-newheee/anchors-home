'use client';
import './scss/ElementTitle.scss';

export default function ElementTitle({
  data,
  className,
  innerHTMLOption = 'N',
}) {
  const GET_CLASSNAME =
    className == undefined
      ? { className: 'element_title' }
      : { className: 'element_title ' + className };
  return innerHTMLOption === 'Y' ? (
    <strong dangerouslySetInnerHTML={{ __html: data }} {...GET_CLASSNAME} />
  ) : (
    <strong {...GET_CLASSNAME}>{data}</strong>
  );
}
