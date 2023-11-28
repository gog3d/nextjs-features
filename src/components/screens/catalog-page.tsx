'use client';
import { FC, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Page from '@/components/page/page';
import HeaderMain from '@/components/header/header-main';
import FooterMain from '@/components/footer/footer-main';
import HorizontalScrolling from '@/components/horizontal-scrolling/horizontal-scrolling';
import CatalogCards from '@/components/catalog-cards/catalog-cards';
import CatalogCard from '@/components/catalog-card/catalog-card';

import CatalogCardsDesctop from '@/components/catalog-cards/catalog-cards-desctop';

import PageContentWrapperCatalog from '@/components/page/page-content-wrapper-catalog';
import ContainerHorizontalScrolling from '@/components/container/container-horizontal-scrolling';

import ButtonConnect from '@/components/button/button-connect';
import BreadCrumbsMobile from '@/components/bread-crumbs/bread-crumbs-mobile';
import ContainerPage from '@/components/container/container-page';

import Modal from '@/components/modal/modal';
import FormFeedback from '@/components/form/form-feedback';

import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

interface ICatalogPageProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes | null;
  initialType: string;
}

const CatalogPage: FC<ICatalogPageProps> = ({catalog, contacts, initialType}) => {
  const { asPath } = useRouter();
  
  const scrollText = [
    'Произведем в любом размере', 'Дизайн нарисуем', 'Макет разработаем',
    'Решение подберем', 'Рекламу оформим', 'Процессы подскажем', 'Рецептуру придумаем'
  ];

  const [modalOn, setModalOn] = useState(false)

  const modalOpen = () => {
    setModalOn(true);
  };
  const modalClose = () => {
    setModalOn(false);
  };

  return (
    <Page>
      <HeaderMain />
      <ContainerPage>
        <Modal modalOn={modalOn} modalClick={modalClose}>
          <FormFeedback catalog={catalog}/>
        </Modal>
        <PageContentWrapperCatalog>
          <BreadCrumbsMobile routerPath={asPath}/>
          <ContainerHorizontalScrolling>
            <HorizontalScrolling textArray={scrollText} />
            <div onClick={modalOpen}>
              <ButtonConnect link={''} text={'Связаться с нами'}/>
            </div>
          </ContainerHorizontalScrolling>
          <CatalogCardsDesctop catalog={catalog} initialType={initialType}/>
        </PageContentWrapperCatalog>
      </ContainerPage>
      <FooterMain contacts={contacts}/>
    </Page>
  );
};

export default CatalogPage;

