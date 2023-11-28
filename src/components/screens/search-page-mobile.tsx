import React, { FC, useState } from 'react';
import PageMobile from '../page/page-mobile';
import { useRouter } from 'next/router';

import PageContentWrapperMobile from '@/components/page/page-content-wrapper-mobile';
import HeaderSearchWrapperMobile from '@/components/header-wrapper/header-search-wrapper-mobile';
import BackLinkMobileIcon from '@/components/icons/back-link-mobile-icon';

import { TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

import { Search } from '@/components/search/search';

interface ISearchPageProps {
  catalog: Array<TCatalogItemsTypes>;
//  pagesData: TDataTypes;
    pagesData: Array<{link: string, value: string}>;
    contacts: TContactsTypes;
}

const SearchPageMobile: FC<ISearchPageProps> = ({ catalog, pagesData, contacts }) => {
//  console.log({pagesData});
  const router = useRouter();


  return (
    <PageMobile>
      <Search>
      <HeaderSearchWrapperMobile>
        <button onClick={()=> router.back()}>
          <BackLinkMobileIcon />
        </button>
        <Search.Input />
      </HeaderSearchWrapperMobile>
      <PageContentWrapperMobile>
        <Search.Result pagesData={pagesData}/>
      </PageContentWrapperMobile>
      </Search>
    </PageMobile>
  );
};

export default SearchPageMobile;

