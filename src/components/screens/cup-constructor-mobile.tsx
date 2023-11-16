import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

//import CupConstructor from '@/components/cups/cup-constructor/cup-constructor';

//import { CustomizationProvider } from '@/context/customization';
import { Constructor } from '@/components/constructor/cup-constructor/constructor';

const CupConstructorMobile = () => {

  return (
    <Constructor>
      <Constructor.ViewerMobile />
      <Constructor.ColorMobile />
      <Constructor.BackgroundMobile />
      <Constructor.LogoMobile />
    </Constructor>
  );
};

export default CupConstructorMobile;

/*
  return (
    <CustomizationProvider>
      <CupConstructor />
    </CustomizationProvider>
  );
*/ 