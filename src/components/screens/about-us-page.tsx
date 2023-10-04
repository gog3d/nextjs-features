import { FC, ReactNode } from 'react';

import PageMobile from '@/components/page/page-mobile';
import PageContentWrapperAboutUsMobile from '@/components/page/page-content-wrapper-about-us-mobile';

//import HeaderMainMobile from '@/components/header/header-main-mobile';
import HeaderMain from '@/components/header/header-main';
//import FooterMainMobile from '@/components/footer/footer-main-mobile';
import FooterMain from '@/components/footer/footer-main';


import ImageWrapperAboutUsMobile from '@/components/image/image-wrapper-about-us-mobile';

import BreadCrumbsMobile from '@/components/bread-crumbs/bread-crumbs-mobile';

import Image from 'next/image';
import { useRouter } from 'next/router';

import AboutUsPageContentMobile from '@/components/page-content/about-us-page-content-mobile';


import ContainerPage from '@/components/container/container-page';


import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

interface IAboutUsPageProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes | null;
}

const AboutUsPage: FC<IAboutUsPageProps> = ({catalog, contacts}) => {
  const { asPath } = useRouter();
  return (
    <PageMobile>
      <HeaderMain />
      <ContainerPage>
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
      </ContainerPage>
      <FooterMain contacts={contacts}/>
    </PageMobile>
  );
};

export default AboutUsPage;
