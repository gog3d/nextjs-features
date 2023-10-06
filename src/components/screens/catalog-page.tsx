import { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Page from '@/components/page/page';
import HeaderMain from '@/components/header/header-main';
import FooterMain from '@/components/footer/footer-main';
import HorizontalScrolling from '@/components/horizontal-scrolling/horizontal-scrolling';
import CatalogCards from '@/components/catalog-cards/catalog-cards';
import CatalogCard from '@/components/catalog-card/catalog-card';

import PageContentWrapperCatalog from '@/components/page/page-content-wrapper-catalog';
import ContainerHorizontalScrolling from '@/components/container/container-horizontal-scrolling';

import ButtonConnect from '@/components/button/button-connect';
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
    <Page>
      <HeaderMain />
      <ContainerPage>
        <PageContentWrapperCatalog>
          <BreadCrumbsMobile routerPath={asPath}/>
          <ContainerHorizontalScrolling>
            <HorizontalScrolling textArray={scrollText} />
            <ButtonConnect link={'/feedback'} text={'Связаться с нами'} />
          </ContainerHorizontalScrolling>
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
        </PageContentWrapperCatalog>
      </ContainerPage>
      <FooterMain contacts={contacts}/>
    </Page>
  );
};

export default CatalogPage;
