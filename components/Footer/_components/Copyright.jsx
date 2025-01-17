'use client';
import Btn from '@/components/Btn/Btn';

const Copyright = ({ data, className }) => {
  if (!data || !data.copyright) {
    return null; // data 객체가 없거나 copyright 속성이 없을 경우 아무것도 렌더링하지 않음
  }

  const { copyright, privacyPolicy } = data;

  return (
    <div className={className.wrap}>
      <span className="copyright">{copyright}</span>
      <Btn type="link" className={"policy_btn"} url={privacyPolicy.privacyPolicyUrl} title={privacyPolicy.privacyPolicyEn}>{privacyPolicy.privacyPolicyKo}</Btn>
    </div>
  );
};

export default Copyright;