import React, { FC } from 'react';
import styles from './header-constructor.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

import BackLinkIcon from '../icons/back-link-icon';
import BurgerMenuIcon from '../icons/burger-menu-icon';

import { useCustomization } from '@/context/customization';

const HeaderConstructorItem = () => {
  const {
    setConstructorView,
    setColorView,
    setBackgroundView,
    setLogoView
  } = useCustomization();

  const switchToConstructor = () => {
    setConstructorView(true);
    setColorView(false);
    setBackgroundView(false);
    setLogoView(false);
  };

  return (
    <header className={styles['header']}>
      <div className={styles['header_goback']} onClick={switchToConstructor}>
        <BackLinkIcon />
      </div>
      <p className={styles['header_title']}></p>
      <div className={styles['header_burger-menu']}>
      </div>
    </header>
  );
};

export default HeaderConstructorItem;