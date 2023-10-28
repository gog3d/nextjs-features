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

import PageContentWrapperCatalog from '@/components/page/page-content-wrapper-catalog';
import ContainerHorizontalScrolling from '@/components/container/container-horizontal-scrolling';

import ButtonConnect from '@/components/button/button-connect';
import BreadCrumbsMobile from '@/components/bread-crumbs/bread-crumbs-mobile';
import ContainerPage from '@/components/container/container-page';

import Modal from '@/components/modal/modal';
import FormFeedback from '@/components/form/form-feedback';

import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';
//
import { TCupTypes } from '../../types/data-types';
//

interface ICupsTypesPageProps {
  cups: Array<TCupTypes> | null;
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes | null;
}

//const CatalogPage: FC<ICatalogPageProps> = ({catalog, contacts}) => {
const CupsTypesPage: FC<ICupsTypesPageProps> = ({ cups, catalog, contacts }) => {
  return (
    <Page>
  
    </Page>
  );
};


export default CupsTypesPage;

