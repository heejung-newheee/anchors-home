'use client';

import React from 'react';
import Accordion from '@/components/Accordion/Accordion';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import Tab from '@/components/Tab/Tab';

const Employment = ({data}) => {
  const { depthTitle, description, process, process_description, process_detail_description, faq, tabList } = data;

  function processStep(){
    return process.map((data, idx) => (
      <div key={idx} className="process_number">
        <Description data={data.number} />
        <Description data={data.text} />
      </div>
    ));
  }

  function processDescription(){
    return process_description.map((data, idx) => (
      <Description key={idx} data={data} />
    ));
  }

  function processDetail(){
    return process_detail_description.map((data, idx) => (
      <div key={idx} className="detail_description_list">
        <ElementTitle data={data.number} />
        <ElementTitle data={data.title} />
        <Description data={data.text} />
      </div>
    ));
  }

  function faqData(){
    return faq.map((item, idx) => ({
      key: idx,
      title: item.title,
      content: item.text,
    }));
  }
  return (
    <section className="employment_area">
      <DepthTitle blindOption="hidden" depthLevel="1">{depthTitle}</DepthTitle>
      <Description className="employment_text" data={description} />

      <Tab type="article" tabList={tabList}>
        <article className="process_tab">
          {process && <div className="process_number_wrap">{processStep()}</div> || null}
          {process_description && <div className="process_description">{processDescription()}</div> || null}
          {process_detail_description && <div className="process_detail_description">{processDetail()}</div> || null}
        </article>

        <article className="faq_tab">
          <Accordion contents={faqData()} />
        </article>
      </Tab>
    </section>
  );
};

export default Employment;
 