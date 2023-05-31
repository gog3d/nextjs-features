import React from 'react';
import CupPage from '../cups-mobile/cups-page/cups-page';
import Header from '../cups-mobile/header-constructor/header';
import Background from '../cups-mobile/background/background';
import File from '../cups-mobile/file/file';
import BackgroundCanvas from '../cups-mobile/background-canvas/background-canvas';
//import ColorApply from '../cups-mobile/color-apply/color-apply';
import ConstructorApply from '../cups-mobile/constructor-apply/constructor-apply';


const CupBackgroundPageMobile = () => {

  return (
    <CupPage>
      <Header />
      <Background>
        <File />
        <BackgroundCanvas>
        </BackgroundCanvas>
        <ConstructorApply />
      </Background>
    </CupPage>
  )
};

export default CupBackgroundPageMobile;
