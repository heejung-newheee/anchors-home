import './scss/Disclaimer.scss';

export default function Disclaimer({ data, className }) {
  const getClassNm =
    className == undefined
      ? { className: 'disclaimer' }
      : { className: 'disclaimer ' + className };
  return <span {...getClassNm}>{data}</span>;
}
