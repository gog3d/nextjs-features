import React, { FC, useState } from 'react';
import PageMobile from '../page/page-mobile';
import Link from 'next/link';
import { useRouter } from 'next/router';


import PageContentWrapperMobile from '@/components/page/page-content-wrapper-mobile';
import HeaderSearchWrapperMobile from '@/components/header-wrapper/header-search-wrapper-mobile';
import BackLinkMobileIcon from '@/components/icons/back-link-mobile-icon';
import InputTextMobile from '@/components/input/input-text-mobile';

import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

import { Search } from '@/components/search/search';

interface ISearchPageProps {
  catalog: Array<TCatalogItemsTypes>;
  pagesData: TDataTypes;
}

const SearchPageMobile: FC<ISearchPageProps> = ({ catalog, pagesData }) => {

  console.log({pagesData});

  const router = useRouter();
  const [searchText, setSearchText] = useState('Пока ничего не найдено');

  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

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
        <div>
          <Search.Result pagesData={pagesData}/>
        </div>
      </PageContentWrapperMobile>
      </Search>
    </PageMobile>
  );
};

export default SearchPageMobile;

