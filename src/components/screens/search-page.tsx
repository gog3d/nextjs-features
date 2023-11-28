import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';

import Page from '@/components/page/page';
import HeaderMain from '@/components/header/header-main';
import FooterMain from '@/components/footer/footer-main';
import ContainerPage from '@/components/container/container-page';
import PageContentWrapperAboutUs from '@/components/page/page-content-wrapper-about-us';
import BreadCrumbsMobile from '@/components/bread-crumbs/bread-crumbs-mobile';

import { TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';
import { Search } from '@/components/search/search';

interface ISearchPageProps {
  catalog: Array<TCatalogItemsTypes>;
//  pagesData: TDataTypes;
    pagesData: Array<{link: string, value: string}>
    contacts: TContactsTypes;
}
const SearchPage: FC<ISearchPageProps> = ({ catalog, pagesData, contacts }) => {
  const { asPath } = useRouter();
  return (
    <Page>
      <HeaderMain />
      <Search>
      <ContainerPage>
      <PageContentWrapperAboutUs>
        <BreadCrumbsMobile routerPath={asPath}/>
        <Search.Input />
        <Search.Result pagesData={pagesData}/>
        </PageContentWrapperAboutUs>
      </ContainerPage>
      </Search>
      <FooterMain contacts={contacts}/>
    </Page>
  );
};

export default SearchPage;

