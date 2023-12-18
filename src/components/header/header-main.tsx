import { FC, ReactNode, useState, useCallback } from 'react';
import styles from './header-main.module.css';

import {useRouter} from 'next/router';
import Link from 'next/link';
import ContainerPage from '@/components/container/container-page';

import HeaderWrapper from '@/components/header-wrapper/header-wrapper';

//import LogoMainMobileIcon from '@/components/icons/logo-main-mobile-icon';
import LogoMainIcon from '@/components/icons/logo-main-icon';
//import BurgerMenuIcon from '@/components/icons/burger-menu-icon';

//import SearchMobileIcon from '@/components/icons/search-mobile-icon';
import SearchIcon from '@/components/icons/search-icon';

import BurgerMenu from '@/components/burger-menu/burger-menu';
import ModalMobile from '@/components/modal/modal-mobile';

const HeaderMain = () => {
  const { asPath } = useRouter();

  return (
    <HeaderWrapper>
      <ContainerPage>
        <div className={styles['header-wrapper']}>
          <Link href={'/'}>
            <LogoMainIcon />
          </Link>
          <nav className={styles['nav-wrapper']}>
            <ul className={styles['links-wrapper']}>
              <li className={
                asPath === '/catalog' ? `${styles['link']} ${styles['link-selected']}` : `${styles['link']}`}
              >
                <Link href={'/catalog'}>
                  Каталог
                </Link>
              </li>
              <li className={
                asPath === '/about-us' ? `${styles['link']} ${styles['link-selected']}` : `${styles['link']}`}
              >
                <Link href={'/about-us'}>
                  О нас
                </Link>
              </li>
              <li className={
                asPath === '/contacts' ? `${styles['link']} ${styles['link-selected']}` : `${styles['link']}`}
                >
                <Link href={'/contacts'}>
                  Контакты
                </Link>
              </li>
            </ul>
            <Link href={'/search'}>
              <SearchIcon />
            </Link>
          </nav>
        </div>
      </ContainerPage>
    </HeaderWrapper>
  );
};

export default HeaderMain;

/*
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
*/

