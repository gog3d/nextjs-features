import { FC } from 'react';

import PageMobile from '@/components/page/page-mobile';
import PageContentWrapperMainMobile from '@/components/page/page-content-wrapper-main-mobile';

import HeaderMainMobile from '@/components/header/header-main-mobile';
import FooterMainMobile from '@/components/footer/footer-main-mobile';
import ImageWrapperMainMobile from '@/components/image/image-wrapper-main-mobile';

import Image from 'next/image';

import MainPageContentMobile from '../page-content/main-page-content-mobile';

import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

import CookieMenuMobile from '@/components/cookie-menu/cookie-menu-mobile';
import CookieMenuProvider from '@/components/cookie-menu/cookie-menu-provider';


interface IHomePageProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes | null;
}

const HomePageMobile: FC<IHomePageProps> = ({catalog, contacts}) => {
  return (
    <PageMobile>
      <HeaderMainMobile />
      <PageContentWrapperMainMobile>
        <MainPageContentMobile />
      </PageContentWrapperMainMobile>
      <ImageWrapperMainMobile>
        <Image
          src={'/media/main-page-mobile-image.png'}
          alt='main-page-mobile-image'
          width='328'
          height='338'
        />
      </ImageWrapperMainMobile>
      <FooterMainMobile contacts={contacts}/>
      <CookieMenuProvider>
        <CookieMenuMobile />
      </CookieMenuProvider>
    </PageMobile>
  );
};

export default HomePageMobile;

