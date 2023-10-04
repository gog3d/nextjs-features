import { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import PageMobile from '@/components/page/page-mobile';

import HeaderMainMobile from '@/components/header/header-main-mobile';
import HeaderMain from '@/components/header/header-main';

import FooterMainMobile from '@/components/footer/footer-main-mobile';
import FooterMain from '@/components/footer/footer-main';


import PageContentWrapperCatalogMobile from '@/components/page/page-content-wrapper-catalog-mobile';
import HorizontalScrolling from '@/components/horizontal-scrolling/horizontal-scrolling';

import CatalogCardsMobile from '@/components/catalog-cards/catalog-cards-mobile';
import CatalogCardMobile from '@/components/catalog-card/catalog-card-mobile';

import ButtonConnectMobile from '@/components/button/button-connect-mobile';

import CatalogCupMobileIcon from '@/components/icons/catalog-cup-mobile-icon';
import CatalogPaperPackagingMobileIcon from '@/components/icons/catalog-paper-packaging-mobile-icon';
import CatalogLidsMobileIcon from '@/components/icons/catalog-lids-mobile-icon';
import CatalogCartonPackagingMobileIcon from '@/components/icons/catalog-carton-packaging-mobile-icon';
import CatalogPlasticBoxMobileIcon from '@/components/icons/catalog-plastic-box-mobile-icon';
import CatalogUniformMobileIcon from '@/components/icons/catalog-uniform-mobile-icon';
import CatalogMayonnaiseSauceMobileIcon from '@/components/icons/catalog-mayonnaise-sauce-mobile-icon';
import CatalogSpaceDecorationMobileIcon from '@/components/icons/catalog-space-decoration-mobile-icon';
import CatalogConsultingMobileIcon from '@/components/icons/catalog-consulting-mobile-icon';
import CatalogDesignMobileIcon from '@/components/icons/catalog-design-mobile-icon';

import BreadCrumbsMobile from '@/components/bread-crumbs/bread-crumbs-mobile';

import ContainerPage from '@/components/container/container-page';


import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

interface ICatalogPageProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes | null;
}

const CatalogPage: FC<ICatalogPageProps> = ({catalog, contacts}) => {

  const { asPath } = useRouter();

  const scrollText = [
    'Произведем в любом размере', 'Дизайн нарисуем', 'Макет разработаем',
    'Решение подберем', 'Рекламу оформим', 'Процессы подскажем', 'Рецептуру придумаем'
  ];

  return (
    <PageMobile>
      <HeaderMain />
      <ContainerPage>

      <PageContentWrapperCatalogMobile>
        <BreadCrumbsMobile routerPath={asPath}/>
        <HorizontalScrolling textArray={scrollText} />
        <CatalogCardsMobile>
          {
            catalog.map((item, index) => 
              <CatalogCardMobile title={item.title} link={`${asPath}${item.link}`} type={item.type} key={index}>
                <Image 
                  src={`media/${item.logo.mobile}`}
                  alt='item-icon'
                  width='90'
                  height='90'
                />
              </CatalogCardMobile>
            )
          }
        </CatalogCardsMobile>
        <ButtonConnectMobile link={'/feedback'} text={'Связаться с нами'} />
      </PageContentWrapperCatalogMobile>

      </ContainerPage>

      <FooterMain contacts={contacts}/>

    </PageMobile>
  );
};

export default CatalogPage;
