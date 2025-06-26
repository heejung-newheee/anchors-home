'use client';

import BaseArticle from '@/components/BaseArticle/BaseArticle';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import './scss/Welfare.scss';

export default function Welfare({
  data,
  imgUrl,
}) {
  // data와 data.content가 올바르게 전달되었는지 확인
  if (!data || !Array.isArray(data.content) || data.content.length === 0) {
    console.error("Invalid data or data.content is not an array or is empty");
    return null;
  }

  // imgUrl이 올바르게 전달되었는지 확인
  if (!imgUrl) {
    console.error("Invalid imgUrl");
    return null;
  }

  return (
    <section className="welfare">
      <DepthTitle blindOption="hidden" depthLevel="1">Welfare List</DepthTitle>
      {data.description && <Description className="welfare_text" innerHTMLOption="Y" data={data.description} />}
      <article className="welfare_list">
        {data.content.map((item, idx) => (
          <BaseArticle key={idx} imgUrl={imgUrl + item.img} imgAlt={item.alt} description={item.title} disclaimer={item.text} />
        ))}
      </article>
    </section>
  );
}
