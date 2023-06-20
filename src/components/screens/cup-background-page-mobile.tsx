import React, { useCallback } from 'react';

import ConstructorPage from '../cups/constructor-page/constructor-page';
import CupPage from '../cups/cups-page/cups-page';
import HeaderConstructor from '../cups/header/header-constructor';
import HeaderConstructorItem from '../cups/header/header-constructor-item';
import ImageCropping from '../cups/image-cropping/image-cropping';
import File from '../cups/file/file';
import ConstructorCanvas from '../cups/constructor-canvas/constructor-canvas';
import ConstructorApply from '../cups/constructor-apply/constructor-apply';
import { useCustomization } from '@/context/customization';

const CupBackgroundPageMobile = () => {

  const {
    colors,
    checkedColor,
    setCheckedColor,
    cupColor,
    setCupColor,
    setConstructorView,
    setColorView,
    setBackgroundView,
    setLogoView
  } = useCustomization();

  const apply = useCallback(() => {
 //   setCupColor(checkedColor);
    setConstructorView(true);
    setColorView(false);
    setBackgroundView(false);
    setLogoView(false);
  }, [checkedColor]);


  return (
    <ConstructorPage>
      <HeaderConstructorItem />
      <ImageCropping title={'Загрузить фон'}>
        <File />
        <ConstructorCanvas>
        </ConstructorCanvas>
        <ConstructorApply apply={apply}/>
      </ImageCropping>
    </ConstructorPage>
  )
};

export default CupBackgroundPageMobile;
