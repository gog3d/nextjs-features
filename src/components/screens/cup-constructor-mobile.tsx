import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

//import CupConstructorPageMobile from '@/components/screens/cup-constructor-page-mobile';
//import CupColorPageMobile from '@/components/screens/cup-color-page-mobile';
//import CupBackgroundPageMobile from '@/components/screens/cup-background-page-mobile';
//import CupLogoPageMobile from '@/components/screens/cup-logo-page-mobile';
import CupConstructor from '@/components/cups/cup-constructor/cup-constructor';

import { CustomizationProvider } from '@/context/customization';

const CupConstructorMobile = () => {

  return (
    <CustomizationProvider>
      <CupConstructor />
    </CustomizationProvider>
  );
};

export default CupConstructorMobile;

