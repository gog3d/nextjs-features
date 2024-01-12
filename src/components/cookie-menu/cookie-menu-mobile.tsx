'use client';
import { FC, ReactNode, useState, useEffect, useCallback } from 'react';
import styles from './cookie-menu-mobile.module.css';

import ContainerPage from '@/components/container/container-page';
import { selectCookieAmount } from '@/redux/features/cookie/selectors';
import { cookieActions } from '@/redux/features/cookie';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';

/*
interface ICookieMenuProps {
  children: ReactNode;
};

const CookieMenu: FC<ICookieMenuProps> = ({children}) => {
*/

const CookieMenuMobile = () => {
  const cookie = useAppSelector((state) => selectCookieAmount(state));
  const dispatch = useAppDispatch();

  useEffect(() => {
    const perfavoreData = document.cookie
      .split("; ")
      .find((row) => row.startsWith("perfavore"))
      ?.split("=")[1];

    if (perfavoreData) {
      dispatch(cookieActions.cookie(false));
    }
  }, []);

  const maxAge = 300;

  const submitCookie = () => {
    document.cookie = `perfavore=isFirstViewCookiePolicy; max-age=${maxAge}; SameSite=None; Secure`;
    dispatch(cookieActions.cookie(false));
  };

  return cookie ? 
    <div className={styles['menu']}>
      <div className={styles['menu-wrapper']}>
        <div className={styles['menu-container']}>
          <div className={styles['menu-text']}>
            {'Этот сайт использует куки-файлы и другие технологии, чтобы помочь  вам в навигации, а также предоставить лучший пользовательский опыт.'}
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

export default CookieMenuMobile;