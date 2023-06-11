import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

//import CupConstructorPageMobile from '@/components/screens/cup-constructor-page-mobile';

import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'

const CupConstructorPageMobile = dynamic(() => import('@/components/screens/cup-constructor-page-mobile'), { ssr: false })


const CupConstructor = () => {

  const {query} = useRouter();

//  console.log(query);

  return (
    <CupConstructorPageMobile />
  );
};

export default CupConstructor;

