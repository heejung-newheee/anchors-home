import LottiePlayer from '@/components/LottiePlayer/LottiePlayer';
import Tab from '@/components/Tab/Tab';
import LottieTest from '@/components/Test/LottieTest';
import lottieMainKeyVisual from '@/public/assets/images/lottie/lottieMainKeyVisual.json';

const LOTTIE_STYLE = {
  height: '600px',
  width: '600px',
  backgroundColor: '#1D1D1F',
};
function Mijeong() {
  return (
    <>
      <p> this is chomj!!!!</p>
      <LottiePlayer data={lottieMainKeyVisual} style={LOTTIE_STYLE} />
      {/*
      <p> 탭 </p>
      <Tab />
      <p> 스크롤 로티 </p>
      <LottieTest />
      */}
    </>
  );
}
export default Mijeong;
