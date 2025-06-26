'use client';

import React from 'react';
import Btn from '@/components/Btn/Btn';
import BaseArticle from '@/components/BaseArticle/BaseArticle';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Disclaimer from '@/components/Disclaimer/Disclaimer';
import Description from '@/components/Description/Description';
import InfiniteRolling from '@/components/InfiniteRolling/InfiniteRolling';
import ScrollTriggerArea from '@/components/ScrollTriggerArea/ScrollTriggerArea';

import lottie_arrow from '@/public/assets/images/lottie/lottieAboutusUpArrow.json';

const LOTTIE_OPTION = {
  data: lottie_arrow,
  autoplay: false,
  loop: false,
};

const TRIGGER_START = {
  mobile: '-710px',
  table: '-710px',
  desktop: '-710px',
  wide: '-750px',
};

const TRIGGER_END = {
  mobile: '700px',
  table: '700px',
  desktop: '700px',
  wide: '700px',
};

const Profile = ({data}) => {
  const { profileDevelopment, scale, profileAward, award, profilePartner, customerLogo } = data;

  const renderScales = () => {
    return scale.map((item, idx) => 
      <em key={idx} className="profile_grow_number">
      {item.number}
      <span>{item.text}</span>
      {(idx !== data.scale.length - 1) && <br />}
      </em>
     );
  }

  const renderAwards = () => {
    return award.map((item, idx) => 
      <BaseArticle key={idx} className="profile_award_list" elementTitle={item.name} description={item.description} />
    );
  }

  const renderCustomerLogos = () => {
    return customerLogo.map((item, idx) => 
      <span key={idx}>
        <img src={data.imgUrl + item.img} alt={item.alt} />
      </span>
    );
  }

  return (
    <section className="anchors_profile section_div is_black">
        <DepthTitle depthLevel="1" blindOption="visible">Anchors Profile</DepthTitle>
        <section className="profile_development">
          <DepthTitle depthLevel="2" blindOption="hidden">About Anchors Development History</DepthTitle>
          <Description innerHTMLOption="Y" className="profile_grow_text" data={profileDevelopment} />
          <Description data={renderScales()} />
          <ScrollTriggerArea
            type="lottieTrigger"
            lottieOption={LOTTIE_OPTION}
            triggerOffset={'center'}
            triggerStart={TRIGGER_START}
            triggerEnd={TRIGGER_END}
          />
        </section>

        <section className="profile_award">
          <DepthTitle depthLevel="2" blindOption="hidden">About Anchors Awards List</DepthTitle>
          <Description innerHTMLOption="Y" className="profile_award_description" data={profileAward} />
          <span className="profile_award_icon"><img src="/assets/images/ico/ico_webaward.svg" alt="web award icon image" /></span>
          {award && renderAwards() || null}
        </section>

        <section className="profile_partner">
          <DepthTitle depthLevel="2" blindOption="hidden">About Anchors Partners List</DepthTitle>
          <Description innerHTMLOption="Y" data={profilePartner} />
          <InfiniteRolling className="about_partner" reverse="Y">{renderCustomerLogos()}</InfiniteRolling>
          <InfiniteRolling className="about_partner">{renderCustomerLogos()}</InfiniteRolling>
          <Disclaimer data={<>Want to know about us</>} />
          <Btn className="download_btn" type="a" url="/assets/images/pdf/[Anchors]Company_Profile_A4_230320.pdf" target="_blank">Download<br />Profiles</Btn>
        </section>
      </section>
  );
};

export default Profile;
 