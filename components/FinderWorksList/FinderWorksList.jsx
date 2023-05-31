'use client';

import Disclaimer from '@/components/Disclaimer/Disclaimer';
import ElementTitle from '@/components/ElementTitle/ElementTitle';
import Visual from '@/components/Visual/Visual';
import Btn from '@/components/Btn/Btn';
import main from '@/helper/data/json/contents/main/main.json';
import works from '@/helper/data/json/contents/works/works.json';

export default function FinderWorksList({ className, arrLength }) {
  const MAIN_ARR = main.ourWorks.portfolio;
  const NEW_MAIN_ARR = MAIN_ARR.map(item => works.content.find(contents => contents.id === item));

  const SWIPER_ARR = NEW_MAIN_ARR.map((item, index) => (
    <Visual key={index} imgUrl={works.imgUrl + item.visual} className={className} defaultId="main_swiper_content">
      <ElementTitle data={item.title} />
      <Disclaimer data={item.description} />
      <Btn type="link" url={item.pageUrl}>
        View More
      </Btn>
    </Visual>
  ));
  return <>{SWIPER_ARR[arrLength]}</>;
}
