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

import Cropper from 'react-easy-crop';
import { Point, Area } from "react-easy-crop/types";

const CupLogoPageMobile = () => {

  const {
    setConstructorView,
    setColorView,
    setBackgroundView,
    setLogoView
  } = useCustomization();

  const apply = useCallback(() => {
    setConstructorView(true);
    setColorView(false);
    setBackgroundView(false);
    setLogoView(false);
  }, [
      setConstructorView,
      setColorView,
      setBackgroundView,
      setLogoView
  ]);

  const [rounded, setRounded] = useState(false);
  const toggleRadio = () => {
    if (rounded) {
      setRounded(false);
    } else {
      setRounded(true);
    }
  };


  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom  ] = useState(1);
  const [sourceImage, setSourceImage] = useState('');

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    console.log(croppedArea, croppedAreaPixels)
  }, []);


  return (
    <ConstructorPage>
      <HeaderConstructorItem />
      <ImageCropping title={'Загрузить лого'}>
        <File setSource={setSourceImage} />
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
        <ConstructorCanvas zoom={zoom} setZoom={setZoom}>
          <Cropper
            image={sourceImage}
            crop={crop}
            zoom={zoom}
            aspect={16 / 9}
            objectFit={'horizontal-cover'}
            onCropChange={setCrop}
            restrictPosition={false}
            zoomWithScroll={true}
            onCropComplete = {onCropComplete}
          />
        </ConstructorCanvas>
        <ConstructorApply apply={apply}/>
      </ImageCropping>
    </ConstructorPage>
  )
};

export default CupLogoPageMobile;
