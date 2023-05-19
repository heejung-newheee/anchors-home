'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'

export default function HistoryPop() {
    const router = useRouter();
    useEffect(() => {
      console.log('router');
    }, [router]);

  return (
    <></>
  );
}
