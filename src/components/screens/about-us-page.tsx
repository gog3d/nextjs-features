import { FC, ReactNode } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Page from '@/components/page/page';
import PageContentWrapperAboutUs from '@/components/page/page-content-wrapper-about-us';
import HeaderMain from '@/components/header/header-main';
import FooterMain from '@/components/footer/footer-main';
import ImageWrapperAboutUsMobile from '@/components/image/image-wrapper-about-us-mobile';
import BreadCrumbsMobile from '@/components/bread-crumbs/bread-crumbs-mobile';
import AboutUsPageContent from '@/components/page-content/about-us-page-content';
import ContainerPage from '@/components/container/container-page';
import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

interface IAboutUsPageProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes | null;
}

const AboutUsPage: FC<IAboutUsPageProps> = ({catalog, contacts}) => {
  const { asPath } = useRouter();
  return (
    <Page>
      <HeaderMain />
      <ContainerPage>
        <PageContentWrapperAboutUs>
          <BreadCrumbsMobile routerPath={asPath}/>
          <AboutUsPageContent />
        </PageContentWrapperAboutUs>
        </ContainerPage>
      <FooterMain contacts={contacts}/>
    </Page>
  );
};

export default AboutUsPage;
