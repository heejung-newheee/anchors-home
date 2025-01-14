'use client';

import Btn from '@/components/Btn/Btn';

const Information = ({ data }) => {
  if (!data) {
    return null; // data가 없을 경우 아무것도 렌더링하지 않음
  }

  const { information, address, companyProfile } = data;
  if (!information || !address || !companyProfile) {
    return null; // 필요한 속성이 없을 경우 아무것도 렌더링하지 않음
  }

  const { depthTitle, sendEmail, call } = information;

  return (
    <div className='footer_container_anchors'>
      <div className='container'>
        <dl className='information'>
          <dt>{depthTitle}</dt>
          <dd><a href={`mailto:${sendEmail.href}`} title={sendEmail.title} className={'sendMail_btn'}>{sendEmail.href}</a></dd>
          <dd><a href={`tel:${call.href}`} title={call.title} className={'call_btn'}>{call.href}</a></dd>
        </dl>

        <dl className='address'>
          <dt>{address.depthTitle}</dt>
          {address.description.map((item, index) => <dd key={index}>{item}</dd>)}
        </dl>
      </div>
      <Btn className="download_btn" type="a" url={companyProfile.href} target="_blank">{companyProfile.title}</Btn>
    </div>
  );
};

export default Information;