'use client';
import Rext, { FC, useCallback } from 'react';

import styles from './logo.module.css';

import CloseMobileIcon from '@/components/icons/close-mobile-icon';
import PlusIcon from '@/components/icons/plus-icon';
import BackLinkMobileIcon from '@/components/icons/back-link-mobile-icon';

import ClipIcon from '@/components/icons/clip-icon';
import BasketIcon from '@/components/icons/basket-icon';
import BigPlusIcon from '@/components/icons/big-plus-icon';
import BigMinusIcon from '@/components/icons/big-minus-icon';

import { selectViewAmount, selectLogoAmount, selectRoundedAmount } from '@/redux/features/cup/selectors';
import { cupActions } from '@/redux/features/cup';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';

//import getCroppedImg from '@/services/cropImage'

import getCroppedImgLogo from '@/services/cropImageLogo'

import Cropper from 'react-easy-crop';
import { Point, Area } from "react-easy-crop/types";


const Logo: FC = () => {

  const viewSelector = useAppSelector((state) => selectViewAmount(state));
  const view = viewSelector === 'logo' ? true : false;
  const rounded = useAppSelector((state) => selectRoundedAmount(state));
  const logo = useAppSelector((state) => selectLogoAmount(state));

  const dispatch = useAppDispatch();
  const setRounded = (source: boolean) => dispatch(cupActions.rounded(source));
  const setSource = (source: string) => dispatch(cupActions.logoSource(source));

  const setSource64 = (source: string | ArrayBuffer | null) => dispatch(cupActions.logoSource64(source));

  const setCrop = (crop: Point) => dispatch(cupActions.logoCrop(crop));
  const setRotation = (rotation: number) => dispatch(cupActions.logoRotation(rotation));
  const setZoom = (zoom: number) => dispatch(cupActions.logoZoom(zoom));
  const setCroppedAreaPixels = (area: Area) => dispatch(cupActions.logoArea(area));
  const setBackgroundImageXY = (position: Point) => dispatch(cupActions.logoPosition({...position}));
  
  
  const setLogoImageCrop = (croppedImage: string) => dispatch(cupActions.cupLogo(croppedImage));
 

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
    setZoom(logo.zoom);
    setBackgroundImageXY({...logo.position});
    setCroppedAreaPixels(croppedAreaPixels);
      }, [logo.position, logo.zoom]);

  const apply = useCallback(async () => {
    try {
      if (logo.source !== '') {
        const croppedImage = await getCroppedImgLogo(
          logo.source,
          logo.area,
          logo.rotation,
          /*flip = */{ horizontal: false, vertical: false },
          /*shape=*/'rect',
          /*m = */4,
          /*aspect = */16 / 9,
          rounded
        )
        setLogoImageCrop(croppedImage!);
        dispatch(cupActions.view('viewer'));
      } else {
        setLogoImageCrop('');
        dispatch(cupActions.logoReset());
        dispatch(cupActions.view('viewer'));
     
      }
    } catch (e) {
      console.error(e)
    }
    }, [logo.source, logo.area, logo.rotation, rounded]);


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
        <p className={styles['title']}>Загрузить лого</p>

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
            onClick={() => dispatch(cupActions.logoReset())}
          >
            <BasketIcon />
          </button>
        </div>
        <div className={styles['logo__radio']}>
          <label className={styles['radio']}>
            <input className={styles['radio__input']} 
              type='radio' 
              name={'logo'}
              checked={!rounded}
              onChange={() => setRounded(false)}
            />
            <div className={styles['radio__state']}>
            <div className={styles['radio__control']}>
              <div className={styles['radio__icon']}></div>
            </div>
          </div>
            <div className={styles['radio__title']}>{'Квадратная'}</div>
          </label>
          <label className={styles['radio']}>
            <input className={styles['radio__input']} 
              type='radio' 
              name={'logo'}
              checked={rounded}
              onChange={() => setRounded(true)}
            />
            <div className={styles['radio__state']}>
            <div className={styles['radio__control']}>
              <div className={styles['radio__icon']}></div>
            </div>
          </div>
            <div className={styles['radio__title']}>{'Круглая'}</div>
          </label>
        </div>
        <div className={styles['constructor__canvas-container']}>
          <div className={styles['constructor__canvas']}>

          <Cropper
            image={logo.source}
            crop={logo.crop}
            rotation={logo.rotation}
            zoom={logo.zoom}
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
          </div>
          <button 
            className={`${styles['constructor__canvas-button']} ${styles['constructor__canvas-button_minus']}`}
            onClick={() => dispatch(cupActions.logoZoom(logo.zoom-0.06))}
          >
            <BigMinusIcon/>
          </button>
          <button 
            className={`${styles['constructor__canvas-button']} ${styles['constructor__canvas-button_plus']}`}
            onClick={() => dispatch(cupActions.logoZoom(logo.zoom+0.06))}
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

export default Logo;
