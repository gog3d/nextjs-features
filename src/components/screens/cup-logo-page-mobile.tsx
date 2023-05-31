import React from 'react';
import CupPage from '../cups-mobile/cups-page/cups-page';
import Header from '../cups-mobile/header-constructor/header';
//import Color from '../cups-mobile/color/color';
//import ColorButtons from '../cups-mobile/color-buttons/color-buttons';
//import ColorRadio from '../cups-mobile/color-radio/color-radio';
//import ColorApply from '../cups-mobile/color-apply/color-apply';
import ConstructorApply from '../cups-mobile/constructor-apply/constructor-apply';


const CupLogoPageMobile = () => {
  return (
    <CupPage>
      <Header />
      <ConstructorApply />
    </CupPage>
  )
};

export default CupLogoPageMobile;
