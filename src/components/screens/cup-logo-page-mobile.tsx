import { useState, useCallback } from 'react';

import ConstructorPage from '../cups/constructor-page/constructor-page';
//import HeaderConstructor from '../cups/header/header-constructor';
import HeaderConstructorItem from '../cups/header/header-constructor-item';
import ImageCropping from '../cups/image-cropping/image-cropping';
import File from '../cups/file/file';
import Radio from '../cups/radio/radio';
import LogoRadio from '../cups/logo-radio/logo-radio';
import ConstructorCanvas from '../cups/constructor-canvas/constructor-canvas';
import ConstructorApply from '../cups/constructor-apply/constructor-apply';
import { useCustomization } from '@/context/customization';



const CupLogoPageMobile = () => {

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
    setCupColor(checkedColor);
    setConstructorView(true);
    setColorView(false);
    setBackgroundView(false);
    setLogoView(false);
  }, [checkedColor]);

  const [rounded, setRounded] = useState(false);

  const toggleRadio = () => {
    if (rounded) {
      setRounded(false);
    } else {
      setRounded(true);
    }
  };

  return (
    <ConstructorPage>
      <HeaderConstructorItem />
      <ImageCropping title={'Загрузить лого'}>
        <File />
        <LogoRadio>
          <Radio 
            title={'Квадратная'} 
            name={'logo'} 
            checked={!rounded} 
            toggleRadio={toggleRadio}
          />
          <Radio 
            title={'Круглая'} 
            name={'logo'} 
            checked={rounded} 
            toggleRadio={toggleRadio} 
          />
        </LogoRadio>
        <ConstructorCanvas>
        </ConstructorCanvas>
        <ConstructorApply apply={apply}/>
      </ImageCropping>
    </ConstructorPage>
  )
};

export default CupLogoPageMobile;
