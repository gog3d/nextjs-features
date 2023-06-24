import React, { useCallback, useState } from 'react';

import ConstructorPage from '../cups/constructor-page/constructor-page';
import CupPage from '../cups/cups-page/cups-page';
import HeaderConstructor from '../cups/header/header-constructor';
import HeaderConstructorItem from '../cups/header/header-constructor-item';
import ImageCropping from '../cups/image-cropping/image-cropping';
import File from '../cups/file/file';
import ConstructorCanvas from '../cups/constructor-canvas/constructor-canvas';
import ConstructorApply from '../cups/constructor-apply/constructor-apply';

import { useCustomization } from '@/context/customization';

import Cropper from 'react-easy-crop';
import { Point, Area } from "react-easy-crop/types";

const CupBackgroundPageMobile = () => {

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
  }, [setConstructorView, setColorView, setBackgroundView, setLogoView]);

  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom  ] = useState(1);
  const [sourceImage, setSourceImage] = useState('');

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    console.log(croppedArea, croppedAreaPixels)
  }, []);

  return (
    <ConstructorPage>
      <HeaderConstructorItem />
      <ImageCropping title={'Загрузить фон'}>
        <File setSource={setSourceImage} />
        <ConstructorCanvas zoom={zoom} setZoom={setZoom}>
          <Cropper
            image={sourceImage}
            crop={crop}
            zoom={zoom}
            minZoom={0.2}
            aspect={16 / 9}
            objectFit={'horizontal-cover'}
            onCropChange={setCrop}
            restrictPosition={false}
            onZoomChange={setZoom}
            zoomWithScroll={true}

            onCropComplete ={onCropComplete}
          />
        </ConstructorCanvas>
        <ConstructorApply apply={apply}/>
      </ImageCropping>
 
    </ConstructorPage>
  )
};

export default CupBackgroundPageMobile;
