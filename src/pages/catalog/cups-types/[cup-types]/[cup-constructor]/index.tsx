import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'

//const CupConstructorPageMobile = dynamic(() => import('@/components/screens/cup-constructor-page-mobile'), { ssr: false })
const CupConstructorMobile = dynamic(() => import('@/components/screens/cup-constructor-mobile'), { ssr: false })

const CupConstructor = () => {

  const {query} = useRouter();

  return (
    <CupConstructorMobile />
  );
};

export default CupConstructor;

