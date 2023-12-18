import React, { FC, useState, useCallback, useMemo } from 'react';
import PageMobile from '../page/page-mobile';
import Link from 'next/link';
import { useRouter } from 'next/router';

import PageContentWrapperMobile from '@/components/page/page-content-wrapper-mobile';
import HeaderWrapperMobile from '@/components/header-wrapper/header-wrapper-mobile';
import BackLinkMobileIcon from '@/components/icons/back-link-mobile-icon';
import EmptyMobileIcon from '@/components/icons/empty-mobile-icon';


import FormFeedbackMobile from '@/components/form/form-feedback-mobile';

import { TDataTypes, TCatalogItemsTypes } from '@/types/data-types';

interface IFeedbackPageProps {
  catalog: Array<TCatalogItemsTypes>;
}

const FeedbackPageMobile: FC<IFeedbackPageProps> = ({catalog}) => {

  const router = useRouter();

 
  return (
    <PageMobile>
      <HeaderWrapperMobile>
        <button onClick={()=> router.back()}>
          <BackLinkMobileIcon />
        </button>
        <p>Связаться с нами</p>
        <EmptyMobileIcon />
      </HeaderWrapperMobile>
      <PageContentWrapperMobile>
        <FormFeedbackMobile catalog={catalog}/>
      </PageContentWrapperMobile>
    </PageMobile>
  );
};

export default FeedbackPageMobile;

