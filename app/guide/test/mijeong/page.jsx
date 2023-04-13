'use client';
import LottiePlayer from '@/components/Lottie/LottiePlayer';
import { initHelper } from '@/helper/init-helper';
const { jquery, variables } = initHelper();

function mijeong() {
  return (
    <>
      <p> this is chomj!!!! </p>
      <LottiePlayer
        render="svg"
        style={{ height: '600px', width: '600px', backgroundColor: '#1D1D1F' }}
        src={'/lottie/lottie_aboutus.json'}
      />
    </>
  );
}
export default mijeong;
