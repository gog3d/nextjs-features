import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import CupBackgroundPageMobile from '@/components/screens/cup-background-page-mobile';

//import { useRouter } from 'next/router';

const CupBackground = () => {
//  const {query} = useRouter();
///  console.log(query);

  return (
    <CupBackgroundPageMobile />
  );
};

export default CupBackground;
