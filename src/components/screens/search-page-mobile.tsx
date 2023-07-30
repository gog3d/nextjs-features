import React, { FC, useState } from 'react';
import PageMobile from '../page/page-mobile';
import Link from 'next/link';
import { useRouter } from 'next/router';


import PageContentMobile from '@/components/page-content//page-content-mobile';
import HeaderSearchWrapperMobile from '@/components/header-wrapper/header-search-wrapper-mobile';
import BackLinkMobileIcon from '@/components/icons/back-link-mobile-icon';
import InputTextMobile from '@/components/input/input-text-mobile';

import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

interface ISearchPageProps {
  catalog: Array<TCatalogItemsTypes>;
}

const SearchPageMobile: FC<ISearchPageProps> = ({ catalog }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState('Пока ничего не найдено');

  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <PageMobile>
      <HeaderSearchWrapperMobile>
        <button onClick={()=> router.back()}>
          <BackLinkMobileIcon />
        </button>
        <InputTextMobile 
          type={'text'}
          placeholder={'Стаканы'}
          handleChange={handleChange}
        />
      </HeaderSearchWrapperMobile>
      <PageContentMobile>
        <div style={{color: '#000000'}}>
          {searchText}
        </div>
      </PageContentMobile>
    </PageMobile>
  );
};

export default SearchPageMobile;

