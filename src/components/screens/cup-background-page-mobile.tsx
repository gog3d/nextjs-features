import React from 'react';

import ConstructorPage from '../cups-mobile/constructor-page/constructor-page';
import CupPage from '../cups-mobile/cups-page/cups-page';
import HeaderConstructor from '../cups-mobile/header/header-constructor';
import ImageCropping from '../cups-mobile/image-cropping/image-cropping';
import File from '../cups-mobile/file/file';
import ConstructorCanvas from '../cups-mobile/constructor-canvas/constructor-canvas';
import ConstructorApply from '../cups-mobile/constructor-apply/constructor-apply';


const CupBackgroundPageMobile = () => {

  return (
    <ConstructorPage>
      <HeaderConstructor />
      <ImageCropping>
        <File />
        <ConstructorCanvas>
        </ConstructorCanvas>
        <ConstructorApply />
      </ImageCropping>
    </ConstructorPage>
  )
};

export default CupBackgroundPageMobile;
