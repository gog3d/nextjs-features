'use client';
import CupConstructorPageMobile from '@/components/screens/cup-constructor-page-mobile';
import CupColorPageMobile from '@/components/screens/cup-color-page-mobile';
import CupBackgroundPageMobile from '@/components/screens/cup-background-page-mobile';
import CupLogoPageMobile from '@/components/screens/cup-logo-page-mobile';

import { useCustomization } from '@/context/customization';

const CupConstructor = () => {

  const {
    constructorView, 
    setConstructorView,
    colorView, 
    setColorView,
    backgroundView, 
    setBackgroundView,
    logoView,
    setLogoView
  } = useCustomization();

//  console.log(constructorView);
  return (
    <>
      {
        constructorView ? <CupConstructorPageMobile /> :
        colorView ? <CupColorPageMobile /> :
        backgroundView ? <CupBackgroundPageMobile /> :
        logoView ? <CupLogoPageMobile /> : null
      }
    </>
  );
};

export default CupConstructor;

