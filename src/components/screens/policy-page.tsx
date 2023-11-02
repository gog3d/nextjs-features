import { FC } from 'react';
import { useRouter } from 'next/router';


import Page from '@/components/page/page';
import HeaderMain from '@/components/header/header-main';
import FooterMain from '@/components/footer/footer-main';

import PageContentWrapperPolicy from '@/components/page/page-content-wrapper-policy';
import BreadCrumbsMobile from '@/components/bread-crumbs/bread-crumbs-mobile';
import ContainerPage from '@/components/container/container-page';


import PolicyPageContent from '@/components/page-content/policy-page-content';

import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

interface IPolicyPageProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes | null;
}

const PolicyPage: FC<IPolicyPageProps> = ({catalog, contacts}) => {
  const { asPath } = useRouter();
  return (
    <Page>
      <HeaderMain />
      <ContainerPage>
        <PageContentWrapperPolicy>
          <BreadCrumbsMobile routerPath={asPath}/>
          <PolicyPageContent />
        </PageContentWrapperPolicy>
      </ContainerPage>
      <FooterMain contacts={contacts}/>
    </Page>
  );
};

export default PolicyPage;
