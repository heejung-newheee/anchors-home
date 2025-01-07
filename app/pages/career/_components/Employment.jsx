'use client';

import React from 'react';
import Accordion from '@/components/Accordion/Accordion';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import Tab from '@/components/Tab/Tab';

const Employment = ({data}) => {
  return (
    <section className="employment_area">
      <DepthTitle blindOption="hidden" depthLevel="1">{data.depthTitle}</DepthTitle>
      <Description className="employment_text" data={data.description} />
      <Tab type="article" tabList={data.tabList}>

        <article className="process_tab">
          <div className="process_number_wrap">
            {data.process.map((data, idx) => (
              <div key={idx} className="process_number">
                <Description data={data.number} />
                <Description data={data.text} />
              </div>
            ))}
          </div>
          <div className="process_description">
            <Description data={data.process_description[0].text1} />
            <Description data={data.process_description[0].text2} />
          </div>
          <div className="process_detail_description">
            {data.process_detail_description.map((data, idx) => (
              <div key={idx} className="detail_description_list">
                <ElementTitle data={data.number} />
                <ElementTitle data={data.title} />
                <Description data={data.text} />
              </div>
            ))}
          </div>
        </article>

        <article className="faq_tab">
          <Accordion
            contents={data.faq.map((data, idx) => ({
              key: idx,
              title: data.title,
              content: data.text,
            }))}
          />
        </article>
      </Tab>
    </section>
  );
};

export default Employment;
 