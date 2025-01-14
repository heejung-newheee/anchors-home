'use client';
import Logo from '@/components/Logo/Logo';

const Copyright = ({ data }) => {
  if (!data || !data.copyright) {
    return null; // data 객체가 없거나 copyright 속성이 없을 경우 아무것도 렌더링하지 않음
  }

  const { copyright } = data;

  return (
    <div className='footer_container_copyright'>
      <Logo />
      <span className="copyright">{copyright}</span>
    </div>
  );
};

export default Copyright;