'use client';

import { FC, ReactNode, useState, useLayoutEffect, useEffect } from 'react';
import styles from './viewer.module.css';
import { useRouter } from 'next/router';

import { Canvas, useThree } from '@react-three/fiber';

import CloseMobileIcon from '@/components/icons/close-mobile-icon';
import PlusIcon from '@/components/icons/plus-icon';
import LoadIcon from '@/components/icons/load-icon';

import Cup from '@/components/constructor/cup-constructor/geometry/cup/cup';
import CupWrapper from '@/components/constructor/cup-constructor/geometry/cup-wrapper/cup-wrapper';
import Experience from '@/components/constructor/cup-constructor/geometry/experience/experience';

import { selectEmailAmount, selectModalAmount, selectCupModule, selectViewAmount, selectCupBackgroundAmount, selectBackgroundAmount, selectCupLogoAmount, selectLogoAmount, selectColorAmount, selectCupImage64Amount } from '@/redux/features/cup/selectors';
import { cupActions } from '@/redux/features/cup';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';


const Viewer: FC = () => {
  const router = useRouter();
  const [send, setSend] = useState(false);
  const dispatch = useAppDispatch();

 // const cup = useAppSelector((state) => selectCupModule(state));
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
      const res = await fetch(`https://83.147.246.17:443/api/send-cup-image`, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
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
      const data = await res.json();
      console.log(data);
      console.log(Number(res.status) === 200);
      if (Number(res.status) !== 200) {
        setSend(false);
        return;
      }
    } catch (error) {
      setSend(false);
      return;
    }
      router.push('/success');
      dispatch(cupActions.modal(false));
      setSend(false);
  };

  //const modal = useAppSelector((state) => selectModalAmount(state));
  const viewSelector = useAppSelector((state) => selectViewAmount(state));
  const view = viewSelector === 'viewer' ? true : false;

return view ? 
  <div className={styles['page']}>
    { send ? 
      <div className={styles['modal']}>
        <div className={styles['modal-background']}>
        </div>
        <div className={styles['modal-content']}>
          <div className={styles['icon-wrapper']}>
            {<LoadIcon />}
          </div>
        </div>
      </div>
        : 
      null
    }
    <div className={styles['header']}>
      <button onClick={() => dispatch(cupActions.modal(false))}>
        <CloseMobileIcon />
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
          <Experience rotate={true}>
            <Cup />
            <CupWrapper />
          </Experience>
        </Canvas>
      </div>
      <div className={styles['send']}>
        <p className={styles['send-title']}>
          Отправить макет на е-mail
        </p>
        <form onSubmit={sendEmail} className={styles['send-container']}>
          <input 
            className={styles['send_input-email']}
            type={'email'}
            placeholder={'E-mail'}
            onChange={handleChangeEmail}
            value={email}
          />
          <button className={styles['send_button']}>
            {'Отправить'} 
          </button>
        </form>
      </div>
    </div>
  </div>
   : 
  null
};

export default Viewer;
