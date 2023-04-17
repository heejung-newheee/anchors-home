import Image from 'next/image';
import Link from 'next/link';

import Btn from '@/components/Btn/Btn';

export default function Logo({ colorTypeOption }) {
  return (
    <h1 className="logo">
      {/*<Btn type="link" url="/" alt="Anchors">*/}
      {/*  <Image*/}
      {/*    src={colorTypeOption}*/}
      {/*    width={100}*/}
      {/*    height={100}*/}
      {/*    className="image-width"*/}
      {/*    alt="Anchors"*/}
      {/*  />*/}
      {/*  logo*/}
      {/*</Btn>*/}
    </h1>
  );
}
