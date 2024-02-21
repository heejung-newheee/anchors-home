import './chchaa.scss';
import InfiniteRolling from '@/components/InfiniteRolling/InfiniteRolling'
import aboutProfile from '@/helper/data/json/contents/about/aboutProfile.json'

export default function Chchaa() {


  return (
    <>
      <InfiniteRolling className="about_partner" reverse="Y" length="solo">
        {aboutProfile.customerLogo.map((cont, idx) => (
          <span key={idx}>
                  <img src={aboutProfile.imgUrl + cont.img} alt={cont.alt} />
                </span>
        ))}
      </InfiniteRolling>
      <InfiniteRolling className="about_partner">
        {aboutProfile.customerLogo.map((cont, idx) => (
          <span key={idx}>
                  <img src={aboutProfile.imgUrl + cont.img} alt={cont.alt} />
                </span>
        ))}
      </InfiniteRolling>
    </>
  );
}
