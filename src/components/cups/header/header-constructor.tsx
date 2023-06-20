import React, { FC } from 'react';
import styles from './header-constructor.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

import BackLinkIcon from '../icons/back-link-icon';
import BurgerMenuIcon from '../icons/burger-menu-icon';

const HeaderConstructor = () => {
  const router = useRouter();

  return (
    <header className={styles['header']}>
      <div className={styles['header_goback']} onClick={()=> router.back()}>
        <BackLinkIcon />
      </div>
      <p className={styles['header_title']}></p>
      <div className={styles['header_burger-menu']}>
      </div>
    </header>
  );
};

export default HeaderConstructor;