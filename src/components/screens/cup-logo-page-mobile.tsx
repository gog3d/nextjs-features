import { useState, useCallback } from 'react';

import Image from 'next/image';

import ConstructorPage from '../cups/constructor-page/constructor-page';

import HeaderConstructor from '../cups/header/header-constructor';
import HeaderConstructorItem from '../cups/header/header-constructor-item';
import ImageCropping from '../cups/image-cropping/image-cropping';
import File from '../cups/file/file';
import Radio from '../cups/radio/radio';
import LogoRadio from '../cups/logo-radio/logo-radio';

import ConstructorCanvas from '../cups/constructor-canvas/constructor-canvas';
import ConstructorApply from '../cups/constructor-apply/constructor-apply';

import getCroppedImg from '../../services/cropImage'
import getCroppedImgLogo from '../../services/cropImageLogo'


import { useCustomization } from '@/context/customization';

import Cropper from 'react-easy-crop';
import { Point, Area } from "react-easy-crop/types";

const CupLogoPageMobile = () => {

  const {

    logoImageSource, setLogoImageSource,
    logoImageCrop, setLogoImageCrop,
    logoImageZoom, setLogoImageZoom,
    logoImageXY, setLogoImageXY,

    setConstructorView,
    setColorView,
    setBackgroundView,
    setLogoView
  } = useCustomization();


  const [crop, setCrop] = useState<Point>(logoImageXY);
  const [zoom, setZoom] = useState(logoImageZoom);
  const [rotation, setRotation] = useState(0);
//  const [shape, setShape] = useState('rect');
  const [croppedAreaPixels, setCroppedAreaPixels] = useState({height: 0, width: 0, x: 0, y: 0});
  const [rounded, setRounded] = useState(false);

  const toggleRadio = () => {
    if (rounded) {
      setRounded(false);
//      setShape('react');
    } else {
      setRounded(true);
//      setShape('round');
    }
  };

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setLogoImageZoom(zoom);
    setLogoImageXY({...crop});
    setCroppedAreaPixels(croppedAreaPixels);
  }, [crop, zoom]);

  const apply = useCallback(async () => {
    try {
      if (logoImageSource !== '') {
        const croppedImage = await getCroppedImgLogo(
          logoImageSource,
          croppedAreaPixels,
          rotation,
          /*flip = */{ horizontal: false, vertical: false },
          /*shape=*/'rect',
          /*m = */4,
          /*aspect = */16 / 9,
          rounded
        )

        setLogoImageCrop(croppedImage!);
        setConstructorView(true);
        setColorView(false);
        setBackgroundView(false);
        setLogoView(false);

      } else {
        setLogoImageCrop('');
        setLogoImageSource('');
        setConstructorView(true);
        setColorView(false);
        setBackgroundView(false);
        setLogoView(false);
      }
    } catch (e) {
      console.error(e)
    }
  }, [logoImageSource, croppedAreaPixels, rotation, setCroppedAreaPixels, setConstructorView, setColorView, setBackgroundView, setLogoView, rounded])

  const deleteImage = () => {
    setZoom(1);
    setCrop({x: 0, y: 0});
    setLogoImageZoom(1);
    setLogoImageXY({x: 0, y: 0});
    setLogoImageSource('');
  };

  return (
    <ConstructorPage>
      <HeaderConstructorItem />
      <ImageCropping title={'Загрузить лого'}>
        <File setSource={setLogoImageSource} deleteImage={deleteImage} />
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
            image={logoImageSource}
            crop={crop}
            rotation={rotation}
            zoom={zoom}
            minZoom={0.2}
            maxZoom={5}
            aspect={4 / 4}
            objectFit={'horizontal-cover'}
            onRotationChange={setRotation}
            onCropChange={setCrop}
            restrictPosition={false}
            onZoomChange={setZoom}
            zoomWithScroll={true}
            cropShape={rounded ? 'round' : 'rect'}
            onCropComplete ={onCropComplete}
          />

        </ConstructorCanvas>
        <ConstructorApply apply={apply}/>
      </ImageCropping>
    </ConstructorPage>
  )
};

export default CupLogoPageMobile;
