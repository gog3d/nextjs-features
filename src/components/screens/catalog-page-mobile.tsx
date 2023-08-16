import { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';


import PageMobile from '../page/page-mobile';
import HeaderMainMobile from '../header/header-main-mobile';
import FooterMainMobile from '../footer/footer-main-mobile';
import PageContentWrapperCatalogMobile from '../page/page-content-wrapper-catalog-mobile';
import HorizontalScrolling from '../horizontal-scrolling/horizontal-scrolling';

import CatalogCardsMobile from '../catalog-cards/catalog-cards-mobile';
import CatalogCardMobile from '../catalog-card/catalog-card-mobile';

import ButtonConnectMobile from '../button/button-connect-mobile';

import CatalogCupMobileIcon from '../icons/catalog-cup-mobile-icon';
import CatalogPaperPackagingMobileIcon from '../icons/catalog-paper-packaging-mobile-icon';
import CatalogLidsMobileIcon from '../icons/catalog-lids-mobile-icon';
import CatalogCartonPackagingMobileIcon from '../icons/catalog-carton-packaging-mobile-icon';
import CatalogPlasticBoxMobileIcon from '../icons/catalog-plastic-box-mobile-icon';
import CatalogUniformMobileIcon from '../icons/catalog-uniform-mobile-icon';
import CatalogMayonnaiseSauceMobileIcon from '../icons/catalog-mayonnaise-sauce-mobile-icon';
import CatalogSpaceDecorationMobileIcon from '../icons/catalog-space-decoration-mobile-icon';
import CatalogConsultingMobileIcon from '../icons/catalog-consulting-mobile-icon';
import CatalogDesignMobileIcon from '../icons/catalog-design-mobile-icon';

import BreadCrumbsMobile from '@/components/bread-crumbs/bread-crumbs-mobile';


import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

interface ICatalogPageProps {
  catalog: Array<TCatalogItemsTypes>;
}

const CatalogPageMobile: FC<ICatalogPageProps> = ({catalog}) => {
  
  const { asPath } = useRouter();
//  console.log(router.asPath);
  const scrollText = [
    'Произведем в любом размере', 'Дизайн нарисуем', 'Макет разработаем',
    'Решение подберем', 'Рекламу оформим', 'Процессы подскажем', 'Рецептуру придумаем'
  ];


  return (
    <PageMobile>
      <HeaderMainMobile />
      <PageContentWrapperCatalogMobile>
        <BreadCrumbsMobile routerPath={asPath}/>
        <HorizontalScrolling textArray={scrollText} />
        <CatalogCardsMobile>
          {
            catalog.map((item, index) => 
              <CatalogCardMobile title={item.title} link={`${asPath}${item.link}`} type={item.type} key={index}>
                {
                  <Image 
                    src={`media/${item.logo.mobile}`}
                    alt='item-icon'
                    width='90'
                    height='90'
                  />
                }
              </CatalogCardMobile>
            )
          }
        </CatalogCardsMobile>
        <ButtonConnectMobile link={'/feedback'} text={'Связаться с нами'} />
      </PageContentWrapperCatalogMobile>
      <FooterMainMobile />
    </PageMobile>
  );
};

export default CatalogPageMobile;
