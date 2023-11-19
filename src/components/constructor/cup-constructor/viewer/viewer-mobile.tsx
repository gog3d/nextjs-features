'use client';
import { FC, ReactNode, useState } from 'react';
import styles from './viewer-mobile.module.css';
import { useRouter } from 'next/router';

import { Canvas } from '@react-three/fiber';

import BackLinkMobileIcon from '@/components/icons/back-link-mobile-icon';
import CloseMobileIcon from '@/components/icons/close-mobile-icon';
import PlusIcon from '@/components/icons/plus-icon';

import Cup from '@/components/constructor/cup-constructor/geometry/cup/cup';
import CupWrapper from '@/components/constructor/cup-constructor/geometry/cup-wrapper/cup-wrapper';
import Experience from '@/components/constructor/cup-constructor/geometry/experience/experience';

import { selectModalAmount, selectCupModule, selectViewAmount, selectCupBackgroundAmount, selectBackgroundAmount, selectCupLogoAmount, selectLogoAmount, selectColorAmount, selectCupImage64Amount } from '@/redux/features/cup/selectors';
import { cupActions } from '@/redux/features/cup';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';

const ViewerMobile: FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const backgroundImageCrop = useAppSelector((state) => selectCupBackgroundAmount(state));
  const background = useAppSelector((state) => selectBackgroundAmount(state));
  const logoImageCrop = useAppSelector((state) => selectCupLogoAmount(state));
  const logo = useAppSelector((state) => selectLogoAmount(state));
  const color = useAppSelector((state) => selectColorAmount(state));
  const cupImage64 = useAppSelector((state) => selectCupImage64Amount(state));

  const handleChangeEmail = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  //const logoSource = convertBase64(logo.source);

  const sendEmail = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
 //     console.log({cupImage64})
      const res = await fetch(`/api/send-cup-image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          'email': email, 
          'color': color, 
          'logo': logoImageCrop, 
          'logoSource': logo.source64, 
          'background': backgroundImageCrop, 
          'backgroundSource': background.source64,
          'cupImage64': cupImage64,
        })
      })
    } catch (error) {
      return
    }
        router.push('/success');
  }
  
  const modal = useAppSelector((state) => selectModalAmount(state));
  const viewSelector = useAppSelector((state) => selectViewAmount(state));
  const view = viewSelector === 'viewer' ? true : false;

  const dispatch = useAppDispatch();

  return view ? 
    <div className={styles['page']}>
      <div className={styles['header']}>
        <button
          onClick={() => router.back()}
        >
          <BackLinkMobileIcon />
        </button>
        {/*<button onClick={() => dispatch(cupActions.modal(false))}>
          <CloseMobileIcon />
        </button>
        */}
      </div>
      <div className={styles['page-content']}>
        <nav className={styles['nav-menu']}>
          <button className={styles['nav-menu_button']}
            onClick={() => dispatch(cupActions.view('color'))}
          >
            <PlusIcon /><div>Цвет</div>
          </button>
          <button className={styles['nav-menu_button']}
            onClick={() => dispatch(cupActions.view('background'))}
          >
            <PlusIcon /><div>Фон</div>
          </button>
          <button className={styles['nav-menu_button']}
            onClick={() => dispatch(cupActions.view('logo'))}
          >
            <PlusIcon /><div>Лого</div>
          </button>
        </nav>
        <div className={styles['canvas-container']}>
        <Canvas gl={{ preserveDrawingBuffer: true }}>
            <Experience>
              <Cup />
              <CupWrapper />
            </Experience>
          </Canvas>
        </div>
        <div className={styles['send']}>
          <p className={styles['send-title']}>
            Отправить макет на е-mail
          </p>
          <div className={styles['send-container']}>
            <input 
              className={styles['send_input-email']}
              type={'email'}
              placeholder={'E-mail'}
              onChange={handleChangeEmail}
              value={email}
            />
            <button className={styles['send_button']}
              onClick={sendEmail}
            >
              {'Отправить'} 
            </button>
          </div>
        </div>
      </div>
    </div>
     : 
    null
};

export default ViewerMobile;
