'use client';
import { useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
// import Logo from "@/components/Logo/Logo";
// import Menu from "@/components/Menu/Menu";

export default function Header({ headerPosition }) {
  const handleScroll = () => {
    console.log(0 + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <header className="header">header</header>;
}
