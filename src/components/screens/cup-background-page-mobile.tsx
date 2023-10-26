import React, { useCallback, useState } from 'react';

import ConstructorPage from '../cups/constructor-page/constructor-page';
import CupPage from '../cups/cups-page/cups-page';
import HeaderConstructor from '../cups/header/header-constructor';
import HeaderConstructorItem from '../cups/header/header-constructor-item';
import ImageCropping from '../cups/image-cropping/image-cropping';
import File from '../cups/file/file';
import ConstructorCanvas from '../cups/constructor-canvas/constructor-canvas';
import ConstructorApply from '../cups/constructor-apply/constructor-apply';

import getCroppedImg from '../../services/cropImage'

import { useCustomization } from '@/context/customization';

import Cropper from 'react-easy-crop';
import { Point, Area } from "react-easy-crop/types";

const CupBackgroundPageMobile = () => {

  const {
    backgroundImageSource,
    setBackgroundImageSource,
    backgroundImageCrop,
    setBackgroundImageCrop,
    backgroundImageZoom,
    setBackgroundImageZoom,
    backgroundImageXY,
    setBackgroundImageXY,

    setConstructorView,
    setColorView,
    setBackgroundView,
    setLogoView
  } = useCustomization();


  const [crop, setCrop] = useState<Point>({...backgroundImageXY});
  const [zoom, setZoom] = useState(backgroundImageZoom);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState({height: 0, width: 0, x: 0, y: 0});

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setBackgroundImageZoom(zoom);
    setBackgroundImageXY({...crop});
//    console.log({croppedAreaPixels})
    setCroppedAreaPixels(croppedAreaPixels);
  }, [crop, zoom]);

  const apply = useCallback(async () => {
    try {
//      console.log({backgroundImageSource});
      if (backgroundImageSource !== '') {
//        console.log({croppedAreaPixels});
        const croppedImage = await getCroppedImg(
          backgroundImageSource,
          croppedAreaPixels,
          rotation
        )
        setBackgroundImageCrop(croppedImage!);
        setConstructorView(true);
        setColorView(false);
        setBackgroundView(false);
        setLogoView(false);

      } else {
        setBackgroundImageCrop('');
        setBackgroundImageSource('');
        setConstructorView(true);
        setColorView(false);
        setBackgroundView(false);
        setLogoView(false);
      }
    } catch (e) {
      console.error(e)
    }
  }, [backgroundImageSource, croppedAreaPixels, rotation, setCroppedAreaPixels, setConstructorView, setColorView, setBackgroundView, setLogoView])

  const deleteImage = () => {
    setZoom(1);
    setCrop({x: 0, y: 0});
    setBackgroundImageZoom(1);
    setBackgroundImageXY({x: 0, y: 0});
    setBackgroundImageSource('');
  };

  return (
    <ConstructorPage>
      <HeaderConstructorItem />
      <ImageCropping title={'Загрузить фон'}>
        <File setSource={setBackgroundImageSource} deleteImage={deleteImage} />
        <ConstructorCanvas zoom={zoom} setZoom={setZoom}>
          <Cropper
            image={backgroundImageSource}
            crop={crop}
            rotation={rotation}
            zoom={zoom}
            minZoom={0.2}
            maxZoom={5}
            aspect={16 / 9}
            objectFit={'horizontal-cover'}
            onRotationChange={setRotation}
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
