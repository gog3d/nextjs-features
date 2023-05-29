//import CupTypesPageMobile from '@/components/screens/cup-types-page-mobile';

import { useRouter } from 'next/router';

const CupTypes = () => {

  const {query} = useRouter();

  console.log(query);

  return (
    <>background</>
  );
};

export default CupTypes;