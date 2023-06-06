import { useState } from 'react';

import ConstructorPage from '../cups-mobile/constructor-page/constructor-page';
import HeaderConstructor from '../cups-mobile/header/header-constructor';
import ImageCropping from '../cups-mobile/image-cropping/image-cropping';
import File from '../cups-mobile/file/file';
import Radio from '../cups-mobile/radio/radio';
import LogoRadio from '../cups-mobile/logo-radio/logo-radio';
import ConstructorCanvas from '../cups-mobile/constructor-canvas/constructor-canvas';
import ConstructorApply from '../cups-mobile/constructor-apply/constructor-apply';


const CupLogoPageMobile = () => {
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
      <HeaderConstructor />
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
        <ConstructorApply />
      </ImageCropping>
    </ConstructorPage>
  )
};

export default CupLogoPageMobile;
