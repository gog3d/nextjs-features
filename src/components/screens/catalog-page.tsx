import { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

//import PageMobile from '@/components/page/page-mobile';
import Page from '@/components/page/page';

//import HeaderMainMobile from '@/components/header/header-main-mobile';
import HeaderMain from '@/components/header/header-main';

//import FooterMainMobile from '@/components/footer/footer-main-mobile';
import FooterMain from '@/components/footer/footer-main';


//import PageContentWrapperCatalogMobile from '@/components/page/page-content-wrapper-catalog-mobile';
import HorizontalScrolling from '@/components/horizontal-scrolling/horizontal-scrolling';

//import CatalogCardsMobile from '@/components/catalog-cards/catalog-cards-mobile';
import CatalogCards from '@/components/catalog-cards/catalog-cards';

//import CatalogCardMobile from '@/components/catalog-card/catalog-card-mobile';

import CatalogCard from '@/components/catalog-card/catalog-card';

import ButtonConnectMobile from '@/components/button/button-connect-mobile';

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

/*

        <BreadCrumbsMobile routerPath={asPath}/>
        <HorizontalScrolling textArray={scrollText} />
        <ButtonConnectMobile link={'/feedback'} text={'Связаться с нами'} />

*/

  return (
    <Page>
      <HeaderMain />
      <ContainerPage>

        <CatalogCards>
          {
            catalog.map((item, index) => 
              <CatalogCard title={item.title} link={`${asPath}${item.link}`} type={item.type} key={index}>
                <Image 
                  src={`media/${item.logo.desctop}`}
                  alt='item-icon'
                  width='226'
                  height='126'
                />
              </CatalogCard>
            )
          }
        </CatalogCards>
      </ContainerPage>
      <FooterMain contacts={contacts}/>
    </Page>
  );
};

export default CatalogPage;
