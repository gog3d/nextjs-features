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
import CatalogCupIcon from '@/components/icons/catalog-cup-icon';

import CatalogPaperPackagingIcon from '@/components/icons/catalog-paper-packaging-icon';
import CatalogLidsIcon from '@/components/icons/catalog-lids-icon';
import CatalogCartonPackagingIcon from '@/components/icons/catalog-carton-packaging-icon';
import CatalogPlasticBoxIcon from '@/components/icons/catalog-plastic-box-icon';
import CatalogUniformIcon from '@/components/icons/catalog-uniform-icon';
import CatalogMayonnaiseSauceIcon from '@/components/icons/catalog-mayonnaise-sauce-icon';
import CatalogSpaceDecorationIcon from '@/components/icons/catalog-space-decoration-icon';
import CatalogConsultingIcon from '@/components/icons/catalog-consulting-icon';
import CatalogDesignIcon from '@/components/icons/catalog-design-icon';

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
                  src={`media/${item.logo.desctop}`}
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
