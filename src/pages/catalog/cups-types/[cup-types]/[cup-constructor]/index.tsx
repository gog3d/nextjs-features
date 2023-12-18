import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'

import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

const CupConstructorMobile = dynamic(() => import('@/components/screens/cup-constructor-mobile'), { ssr: false })

const CupConstructor = () => {

  const router = useRouter();
  const isDesctop = useMediaQuery({
    query: '(min-width: 800px)'
  });

  useEffect(()=>{
    isDesctop ? router.push('/catalog') : ''
  }, [isDesctop]);

  return (
    <CupConstructorMobile />
  );
};

export default CupConstructor;
