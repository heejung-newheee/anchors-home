import ElementTitle from '@/components/ElementTitle/ElementTitle';
import SwiperArea from '@/components/SwiperArea/SwiperArea';
import Visual from '@/components/Visual/Visual';
import aboutIntro from '@/helper/data/json/contents/about/aboutIntro.json';
import aboutMembers from '@/helper/data/json/contents/about/aboutMembers.json';
import variables from '@/public/assets/scss/_variables.module.scss';

export default function Jueun() {
  return (
    <>
      {/* Menu component test */}
      {/* <Header /> */}

      {/* ElementTitle component test */}
      <p
        style={{
          backgroundColor: variables.colorBlack,
          color: '#fff',
          padding: '10px 0',
        }}
      >
        ElementTitle Component
      </p>
      <ElementTitle data="Element Title" />

      {/* Visual component test */}
      <p
        style={{
          backgroundColor: variables.colorBlack,
          color: '#fff',
          padding: '10px 0',
          marginTop: '30px',
        }}
      >
        Visual Component
      </p>
      <Visual imgUrl="https://picsum.photos/1920/800" pageTitleData="pageTitle">
        <div>
          <p>Title</p>
          <span>Description</span>
        </div>
      </Visual>

      {/* SwiperArea component test */}
      <p
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '10px 0',
          marginTop: '30px',
        }}
      >
        SwiperArea Component
      </p>
      <SwiperArea
        autoPlayStop="Y"
        type="single"
        swiperOption={{
          slidesPerView: 'auto',
          navigation: false,
          pagination: false,
          scrollbar: {
            draggable: true,
          },
          autoplay: {
            delay: 1,
          },
          loop: true,
          speed: 4000,
        }}
        className="single scroll-linear"
        swiperContent={aboutMembers.members.map((cont, idx) => (
          <div key={idx}>
            <p>{cont.nameEn}</p>
            <div>
              <p>{cont.nameKo}</p>
              <p>{cont.part}</p>
              <p>{cont.hashtag}</p>
            </div>
          </div>
        ))}
      >
        {/* aboutMembers.members */}
      </SwiperArea>
      <SwiperArea
        type="double"
        firstContent={aboutIntro.introduction.map((cont, idx) => (
          <div key={idx}>
            <p>{cont.highlightText}</p>
          </div>
        ))}
        secondContent={aboutIntro.introduction.map((cont, idx) => (
          <div>
            <p>{cont.text}</p>
          </div>
        ))}
        firstSwiperOption={{}}
        secondSwiperOption={{
          navigation: false,
          pagination: false,
        }}
        firstClassName="first_test"
        secondClassName="second_test"
      />
    </>
  );
}
