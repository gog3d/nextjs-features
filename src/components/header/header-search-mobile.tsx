import { FC, ReactNode, useState, useCallback } from 'react';
import styles from './header-search-mobile.module.css';

import Link from 'next/link';

import HeaderSearchWrapperMobile from '@/components/header-wrapper/header-search-wrapper-mobile';
import BackLinkMobileIcon from '@/components/icons/back-link-mobile-icon';

const HeaderSearchMobile = () => {

  return (
    <HeaderSearchWrapperMobile>
      <Link href={'/'}>
        <BackLinkMobileIcon />
      </Link>
      <input className={styles['search-input']} type='text' placeholder='cup' />
    </HeaderSearchWrapperMobile>
  );
};

export default HeaderSearchMobile;