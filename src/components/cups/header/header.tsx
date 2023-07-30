import { useState } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

import BurgerMenu from '@/components/burger-menu/burger-menu';
import ModalMobile from '@/components/modal/modal-mobile';

import BackLinkIcon from '../icons/back-link-icon';
import BurgerMenuIcon from '../icons/burger-menu-icon';
import HeaderWrapperMobile from '@/components/header-wrapper/header-wrapper-mobile';

const Header = () => {
  const [modalOn, setModalOn] = useState(false)

  const burgerMenuClick = () => {
    setModalOn(true);
  };
  const onClose = () => {
    setModalOn(false);
  };

  const router = useRouter();

  return (
    <HeaderWrapperMobile>
      <div className={styles['header_goback']} onClick={()=> router.back()}>
        <BackLinkIcon />
      </div>
      <p className={styles['header_title']}>Стаканы</p>
      <button onClick={burgerMenuClick}>
        <BurgerMenuIcon />
      </button>
      <ModalMobile modalOn={modalOn} modalClick={onClose}>
        <BurgerMenu onClose={onClose} />
      </ModalMobile>
    </HeaderWrapperMobile>
  );
};

export default Header;
