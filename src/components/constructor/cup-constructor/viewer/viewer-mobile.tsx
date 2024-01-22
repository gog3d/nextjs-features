'use client';
import { FC, ReactNode, useState, useEffect, useCallback } from 'react';
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

import { selectEmailAmount, selectModalAmount, selectCupModule, selectViewAmount, selectCupBackgroundAmount, selectBackgroundAmount, selectCupLogoAmount, selectLogoAmount, selectColorAmount, selectCupImage64Amount, selectSubmitAmount } from '@/redux/features/cup/selectors';
import { cupActions } from '@/redux/features/cup';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';

const ViewerMobile: FC = () => {
  const router = useRouter();
  const [send, setSend] = useState(false);
  const dispatch = useAppDispatch();

  const backgroundImageCrop = useAppSelector((state) => selectCupBackgroundAmount(state));
  const background = useAppSelector((state) => selectBackgroundAmount(state));
  const logoImageCrop = useAppSelector((state) => selectCupLogoAmount(state));
  const logo = useAppSelector((state) => selectLogoAmount(state));
  const color = useAppSelector((state) => selectColorAmount(state));
  const cupImage64 = useAppSelector((state) => selectCupImage64Amount(state));

  const email = useAppSelector((state) => selectEmailAmount(state));
//
  const submit = useAppSelector((state) => selectSubmitAmount(state));
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (submit && email === '') {
      setValid(false);
    } else {
      setValid(true);
    };
  }, [email, submit]);
//

  const handleChangeEmail = (e:  React.ChangeEvent<HTMLInputElement>) => {
    dispatch(cupActions.email(e.target.value));
  };

  const sendEmail = useCallback(async (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(cupActions.submit(true));
    if (email) {
      try {
        setSend(true);
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
        });
        if (Number(res.status) !== 200) {
          setSend(false);
          return;
        }
      } catch (error) {
        setSend(false);
        return
      }
      router.push('/success');
      setSend(false);
      dispatch(cupActions.reset());
  }
  }, [
      email, 
      color, 
      logoImageCrop, 
      logo.source64, 
      backgroundImageCrop,
      background,
      cupImage64,
]);

  const modal = useAppSelector((state) => selectModalAmount(state));
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
          <form onSubmit={sendEmail} className={styles['send-container']}>
            <div className={styles['input-wrapper']}>
              <input 
                className={valid ? styles['input'] : `${styles['input']} ${styles['input_invalid']}`}
                type={'email'}
                placeholder={'E-mail'}
                onChange={handleChangeEmail}
                value={email}
              />
              <div className={styles['form__error']}>
                {'Это поле должно содержать E-Mail в формате example@site.com'}
              </div>
            </div>
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

export default ViewerMobile;
