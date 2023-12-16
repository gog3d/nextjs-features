'use client';
import { FC, ReactNode, useState } from 'react';
import styles from './viewer-mobile.module.css';
import { useRouter } from 'next/router';

import { Canvas } from '@react-three/fiber';

import BackLinkMobileIcon from '@/components/icons/back-link-mobile-icon';
import CloseMobileIcon from '@/components/icons/close-mobile-icon';
import PlusIcon from '@/components/icons/plus-icon';
import LoadIcon from '@/components/icons/load-icon';

import Cup from '@/components/constructor/cup-constructor/geometry/cup/cup';
import CupWrapper from '@/components/constructor/cup-constructor/geometry/cup-wrapper/cup-wrapper';
import Experience from '@/components/constructor/cup-constructor/geometry/experience/experience';

import { selectEmailAmount, selectModalAmount, selectCupModule, selectViewAmount, selectCupBackgroundAmount, selectBackgroundAmount, selectCupLogoAmount, selectLogoAmount, selectColorAmount, selectCupImage64Amount } from '@/redux/features/cup/selectors';
import { cupActions } from '@/redux/features/cup';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';

const ViewerMobile: FC = () => {
  const router = useRouter();
  const [send, setSend] = useState(false);

  const backgroundImageCrop = useAppSelector((state) => selectCupBackgroundAmount(state));
  const background = useAppSelector((state) => selectBackgroundAmount(state));
  const logoImageCrop = useAppSelector((state) => selectCupLogoAmount(state));
  const logo = useAppSelector((state) => selectLogoAmount(state));
  const color = useAppSelector((state) => selectColorAmount(state));
  const cupImage64 = useAppSelector((state) => selectCupImage64Amount(state));

  const email = useAppSelector((state) => selectEmailAmount(state));

  const handleChangeEmail = (e:  React.ChangeEvent<HTMLInputElement>) => {
    dispatch(cupActions.email(e.target.value));
  };

  const sendEmail = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSend(true);
    try {
//      const res = await fetch(`/api/send-cup-image`, {
//      const res = await fetch(`https://83.147.246.17:443/api/send-cup-image`, {
      const res = await fetch(`https://83.147.246.17:3000/api/send-cup-image`, {

        method: 'POST',
        mode: 'cors',
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
      });
      if (Number(res.status) !== 200) {
        setSend(false);
        return;
      }
    } catch (error) {
      setSend(false);
      return
    }
      setSend(false);
      router.push('/success');
  }

  const modal = useAppSelector((state) => selectModalAmount(state));
  const viewSelector = useAppSelector((state) => selectViewAmount(state));
  const view = viewSelector === 'viewer' ? true : false;

  const dispatch = useAppDispatch();

  return view ? 
    <div className={styles['page']}>
      { send ? 
        <div className={styles['modal']}>
          <div className={styles['modal-background']}>
          </div>
          <div className={styles['modal-content']}>
            <div className={styles['icon-wrapper']}>
              <LoadIcon />
            </div>
          </div>
        </div>
          : 
        null
      }
      <div className={styles['header']}>
        <button
          onClick={() => router.back()}
        >
          <BackLinkMobileIcon />
        </button>
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
            <Experience rotate={false}>
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
