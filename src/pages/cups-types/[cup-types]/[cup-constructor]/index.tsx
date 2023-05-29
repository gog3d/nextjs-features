import CupConstructorPageMobile from '@/components/screens/cup-constructor-page-mobile';

import { useRouter } from 'next/router';

const CupConstructor = () => {

  const {query} = useRouter();

  console.log(query);

  return (
    <CupConstructorPageMobile />
  );
};

export default CupConstructor;