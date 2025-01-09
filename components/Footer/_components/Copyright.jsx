'use client';
import Logo from '@/components/Logo/Logo';

const Copyright = ({data}) => {
  const { copyright } = data;
  
  return (
    <div className='footer_container_copyright'>
      <Logo />
      <span className="copyright">{copyright}</span>
    </div>
  );
};

export default Copyright;
 