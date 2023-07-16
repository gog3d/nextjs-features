import { FC, ReactNode, useState, useCallback } from 'react';
import styles from './header-main-mobile.module.css';

import Link from 'next/link';

import HeaderWrapperMobile from '@/components/header-wrapper/header-wrapper-mobile';
import LogoMainMobileIcon from '@/components/icons/logo-main-mobile-icon';
import BurgerMenuIcon from '@/components/icons/burger-menu-icon';
import SearchIcon from '@/components/icons/search-icon';

import BurgerMenu from '@/components/burger-menu/burger-menu';
import ModalMobile from '@/components/modal/modal-mobile';

const HeaderMainMobile = () => {
  const [modalOn, setModalOn] = useState(false)

  const burgerMenuClick = () => {
    setModalOn(true);
  };
  const onClose = () => {
    setModalOn(false);
  };

  return (
    <HeaderWrapperMobile>
      <Link href={'/'}>
        <LogoMainMobileIcon />
      </Link>
      <div className={styles['left-icons']}>
        <Link href={'/serach'}>
          <SearchIcon />
        </Link>
        <button onClick={burgerMenuClick}>
          <BurgerMenuIcon />
        </button>
      </div>
      <ModalMobile modalOn={modalOn} modalClick={onClose}>
        <BurgerMenu onClose={onClose} />
      </ModalMobile>
    </HeaderWrapperMobile>
  );
};

export default HeaderMainMobile;