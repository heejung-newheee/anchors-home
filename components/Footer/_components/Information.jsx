'use client';

import Btn from '@/components/Btn/Btn';

const Information = ({data}) => {
  const { sendEmail } = data;
  
  return (
    <div className='footer_container_anchors'>
      <div className='container'>
        <dl className='information'>
          <dt>Let’s Talk</dt>
          <dd><a href={`mailto:${sendEmail}`} title={"send mail"} className={'sendMail_btn'}>contact@anchors-biz.com</a></dd>
          <dd><a href={"tel:+82)02-332-9603"} title={"call"} className={'call_btn'}>+82)02-332-9603</a></dd>
        </dl>

        <dl className='address'>
          <dt>Address</dt>
          <dd>Anchors F9, 10 125, Yanghwa-ro, Mapo-gu, Seoul, Republic of Korea</dd>
          <dd>서울특별시 마포구 양화로 125 9층, 10층</dd>
        </dl>
      </div>
      <Btn className="download_btn" type="a" url="/assets/images/pdf/[Anchors]Company_Profile_A4_230320.pdf" target="_blank">회사소개서</Btn>
    </div>
  );
};

export default Information;
 