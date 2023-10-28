import { FC, ReactNode } from 'react';

import PageMobile from '@/components/page/page-mobile';
import PageContentWrapperAboutUsMobile from '@/components/page/page-content-wrapper-about-us-mobile';

import HeaderMainMobile from '@/components/header/header-main-mobile';
import FooterMainMobile from '@/components/footer/footer-main-mobile';
import ImageWrapperAboutUsMobile from '@/components/image/image-wrapper-about-us-mobile';

import BreadCrumbsMobile from '@/components/bread-crumbs/bread-crumbs-mobile';

import Image from 'next/image';
import { useRouter } from 'next/router';

import AboutUsPageContentMobile from '@/components/page-content/about-us-page-content-mobile';

import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

interface IAboutUsPageProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes | null;
}

const AboutUsPageMobile: FC<IAboutUsPageProps> = ({catalog, contacts}) => {
  const { asPath } = useRouter();
  return (
    <PageMobile>
      <HeaderMainMobile />
      <PageContentWrapperAboutUsMobile>
        <BreadCrumbsMobile routerPath={asPath}/>
        <AboutUsPageContentMobile />
      </PageContentWrapperAboutUsMobile>
      <ImageWrapperAboutUsMobile>
        <Image
          src={'/media/about-us-page-mobile-image.png'}
          alt='main-page-mobile-image'
          width='328'
          height='338'
        />
      </ImageWrapperAboutUsMobile>
      <FooterMainMobile contacts={contacts}/>
    </PageMobile>
  );
};

export default AboutUsPageMobile;
