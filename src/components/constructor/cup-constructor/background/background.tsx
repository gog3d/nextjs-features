'use client';
import Rext, { FC, useCallback } from 'react';

import styles from './background.module.css';

import CloseMobileIcon from '@/components/icons/close-mobile-icon';
import PlusIcon from '@/components/icons/plus-icon';
import BackLinkMobileIcon from '@/components/icons/back-link-mobile-icon';
import ClipIcon from '@/components/icons/clip-icon';
import BasketIcon from '@/components/icons/basket-icon';
import BigPlusIcon from '@/components/icons/big-plus-icon';
import BigMinusIcon from '@/components/icons/big-minus-icon';

import { selectColorsAmount, selectCupColorAmount, selectViewAmount, selectBackgroundAmount } from '@/redux/features/cup/selectors';
import { cupActions } from '@/redux/features/cup';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';

import getCroppedImg from '@/services/cropImage'

import Cropper from 'react-easy-crop';
import { Point, Area } from "react-easy-crop/types";

const Background: FC = () => {

  const viewSelector = useAppSelector((state) => selectViewAmount(state));
  const view = viewSelector === 'background' ? true : false;
  const background = useAppSelector((state) => selectBackgroundAmount(state));
  

  const dispatch = useAppDispatch();
  const setSource = (source: string) => dispatch(cupActions.backgroundSource(source));

  const setSource64 = (source: string | ArrayBuffer | null) => dispatch(cupActions.backgroundSource64(source));

  const setCrop = (crop: Point) => dispatch(cupActions.backgroundCrop(crop));
  const setRotation = (rotation: number) => dispatch(cupActions.backgroundRotation(rotation));
  const setZoom = (zoom: number) => dispatch(cupActions.backgroundZoom(zoom));
  const setCroppedAreaPixels = (area: Area) => dispatch(cupActions.backgroundArea(area));
  const setBackgroundImageXY = (position: Point) => dispatch(cupActions.backgroundPosition({...position}));
  
  
  const setBackgroundImageCrop = (croppedImage: string) => dispatch(cupActions.cupBackround(croppedImage));

  const onFileChange = async (e:  React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSource(URL.createObjectURL(file));
      const blob = await new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            //resolve(fileReader.result);
            setSource64(fileReader.result);
        };
          fileReader.onerror = (error) => {
       ///     reject(error);
          setSource64('');
        };
    });
    }
  }

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setZoom(background.zoom);
    setBackgroundImageXY({...background.position});
    setCroppedAreaPixels(croppedAreaPixels);
  }, [background.position, background.zoom]);

  const apply = useCallback(async () => {
    try {
      if (background.source !== '') {
        const croppedImage = await getCroppedImg(
          background.source,
          background.area,
          background.rotation
        )
        setBackgroundImageCrop(croppedImage!);
        dispatch(cupActions.view('viewer'));
      } else {
        setBackgroundImageCrop('');
        dispatch(cupActions.backroundReset());
        dispatch(cupActions.view('viewer'));

      }
    } catch (e) {
      console.error(e)
    }
    }, [background.source, background.area, background.rotation]);

  return view ? 
    <div className={styles['page']}>
      <div className={styles['header']}>
        <button
          onClick={() => dispatch(cupActions.view('viewer'))}
        >
          <BackLinkMobileIcon />
        </button>
        <button onClick={() => dispatch(cupActions.modal(false))}>
          <CloseMobileIcon />
        </button>
      </div>
      <div className={styles['page-content']}>
        <p className={styles['title']}>Загрузить фон</p>
        <div className={styles['file__container']}>
          <div className={styles['file']}>
            <label className={styles['file__label']}>
              <div className={styles['file__label_svg']}>
                <ClipIcon />
              </div>
              <p className={styles['file__label_text']}>Выбрать файл</p>
              <input 
                className={styles['file__input']} 
                type="file"
                onChange={onFileChange}
              ></input>
            </label>
          </div>
          <button 
            className={styles['file_delete-button']}
            onClick={() => dispatch(cupActions.backroundReset())}
          >
            <BasketIcon />
          </button>
        </div>
        <div className={styles['constructor__canvas-container']}>
          <div className={styles['constructor__canvas']}>
          <Cropper
            image={background.source}
            crop={background.crop}
            rotation={background.rotation}
            zoom={background.zoom}
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

          </div>
          <button 
            className={`${styles['constructor__canvas-button']} ${styles['constructor__canvas-button_minus']}`}
            onClick={() => dispatch(cupActions.backgroundZoom(background.zoom-0.06))}
          >
            <BigMinusIcon/>
          </button>
          <button 
            className={`${styles['constructor__canvas-button']} ${styles['constructor__canvas-button_plus']}`}
            onClick={() => dispatch(cupActions.backgroundZoom(background.zoom+0.06))}
          >
            <BigPlusIcon/>
          </button>
        </div>
        <div className={styles['apply-button_container']}>
          <button className={styles['apply-button']}
            onClick={apply}
          >       
            Применить
          </button>
        </div>
      </div>
    </div>
    :
    null
};

export default Background;
