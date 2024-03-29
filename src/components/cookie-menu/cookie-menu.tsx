'use client';
import { FC, ReactNode, useState, useEffect, useCallback } from 'react';
import styles from './cookie-menu.module.css';

import ContainerPage from '@/components/container/container-page';
import AttentionIcon from '@/components/icons/attention-icon';

//import { selectCookieAmount } from '@/redux/features/cookie/selectors';
//import { cookieActions } from '@/redux/features/cookie';
//import { useAppSelector, useAppDispatch } from '@/redux/hooks';

const CookieMenu = () => {
  const [cookie, setCookie] = useState(true);

//  const cookie = useAppSelector((state) => selectCookieAmount(state));
//  const dispatch = useAppDispatch();

  useEffect(() => {
    const perfavoreData = document.cookie
      .split("; ")
      .find((row) => row.startsWith("perfavore"))
      ?.split("=")[1];
    if (perfavoreData) {
//      dispatch(cookieActions.cookie(false));
      setCookie(false);
    }
  }, []);

  const maxAge = 1800;

  const submitCookie = () => {
    document.cookie = `perfavore=isFirstViewCookiePolicy; max-age=${maxAge}; SameSite=None; Secure`;
//    dispatch(cookieActions.cookie(false));
      setCookie(false);
  };

  return cookie ? 
    <div className={styles['menu']}>
      <div className={styles['menu-wrapper']}>
        <div className={styles['menu-container']}>
          <div className={styles['icon-container']}>
            <AttentionIcon />
          </div>
          <div className={styles['menu-text']}>
            {'Этот сайт использует куки-файлы и другие технологии, чтобы помочь  вам в навигации, а также предоставить лучший пользовательский опыт.'}
          </div>
          <div className={styles['vertical-line-container']}>
            <div className={styles['vertical-line']}></div>
          </div>

          <div>
            <button 
              className={styles['menu-button']}
              onClick={submitCookie}
            >
              Принять
            </button>
          </div>
        </div>
      </div>
    </div> : null
};

export default CookieMenu;