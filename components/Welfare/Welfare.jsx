'use client';

import BaseArticle from '@/components/BaseArticle/BaseArticle';
import DepthTitle from '@/components/DepthTitle/DepthTitle';
import Description from '@/components/Description/Description';
import './scss/Welfare.scss';

export default function Welfare({
  className,
  description,
  dataList,
  imgUrl,
}) {
  return (
    <section className={className ? "welfare " + className : "welfare"}>
        <DepthTitle blindOption="hidden" depthLevel="1">Welfare List</DepthTitle>
        <Description className="welfare_text" innerHTMLOption="Y" data={description} />
        <article className="welfare_list">
          {dataList.map((data, idx) => (
            <BaseArticle key={idx} imgUrl={imgUrl + data.img} imgAlt={data.alt} description={data.title} disclaimer={data.text} />
          ))}
        </article>
      </section>
  );
}
