import { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import PageMobile from '@/components/page/page-mobile';
import HeaderMainMobile from '@/components/header/header-main-mobile';
import FooterMainMobile from '@/components/footer/footer-main-mobile';
import PageContentWrapperCatalogMobile from '@/components/page/page-content-wrapper-catalog-mobile';
import HorizontalScrollingMobile from '@/components/horizontal-scrolling/horizontal-scrolling-mobile';

import CatalogCardsMobile from '@/components/catalog-cards/catalog-cards-mobile';
import CatalogCardMobile from '@/components/catalog-card/catalog-card-mobile';

import ButtonConnectMobile from '@/components/button/button-connect-mobile';

import BreadCrumbsMobile from '@/components/bread-crumbs/bread-crumbs-mobile';


import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

interface ICatalogPageProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes | null;
}

const CatalogPageMobile: FC<ICatalogPageProps> = ({catalog, contacts}) => {
  
  const { asPath } = useRouter();

 // console.log(contacts);

  const scrollText = [
    'Произведем в любом размере', 'Дизайн нарисуем', 'Макет разработаем',
    'Решение подберем', 'Рекламу оформим', 'Процессы подскажем', 'Рецептуру придумаем'
  ];

  return (
    <PageMobile>
      <HeaderMainMobile />
      <PageContentWrapperCatalogMobile>
        <BreadCrumbsMobile routerPath={asPath}/>
        <HorizontalScrollingMobile textArray={scrollText} />
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
      <FooterMainMobile contacts={contacts}/>
    </PageMobile>
  );
};

export default CatalogPageMobile;
