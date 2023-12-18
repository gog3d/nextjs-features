import { FC, ReactNode } from 'react';
import styles from './burger-menu.module.css';

import Link from 'next/link';
import {useRouter} from 'next/router';

import HeaderWrapperMobile from '@/components/header-wrapper/header-wrapper-mobile';
import PageMobile from '@/components/page/page-mobile';
import PageContentWrapperMobile from '@/components/page/page-content-wrapper-mobile';
import LogoMainMobileIcon from '@/components/icons/logo-main-mobile-icon';
import CloseMobileIcon from '@/components/icons/close-mobile-icon';

interface IBurgerMenuProps {
  onClose: () => void;
}

const BurgerMenu: FC<IBurgerMenuProps> = ({onClose}) => {

  const { asPath } = useRouter();

  return (
    <div className={styles['burger-menu']}>
      <HeaderWrapperMobile>
        <LogoMainMobileIcon />
        <button onClick={onClose}>
          <CloseMobileIcon />
        </button>
      </HeaderWrapperMobile>
      <PageContentWrapperMobile>
        <ul className={styles['menu']}>
          <li 
            className={
              asPath === '/' ? `${styles['menu-item']} ${styles['menu-item-selected']}` : styles['menu-item']}
          >
            <Link href={'/'}>
              Главная
            </Link>
          </li>
          <li 
            className={
              asPath === '/catalog' ? `${styles['menu-item']} ${styles['menu-item-selected']}` : styles['menu-item']}
          >
            <Link href={'/catalog'}>
              Каталог
            </Link>
          </li>
          <li 
            className={
              asPath === '/about-us' ? `${styles['menu-item']} ${styles['menu-item-selected']}` : styles['menu-item']}
          >
            <Link href={'/about-us'}>
              О нас
            </Link>
          </li>
          <li 
            className={
              asPath === '/contacts' ? `${styles['menu-item']} ${styles['menu-item-selected']}` : styles['menu-item']}
          >
            <Link href={'/contacts'}>
              Контакты
            </Link>
          </li>
        </ul>
      </PageContentWrapperMobile>
    </div>
  );
};

export default BurgerMenu;