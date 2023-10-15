import { FC } from 'react';

import Page from '@/components/page/page';
import HeaderMain from '@/components/header/header-main';
import FooterMain from '@/components/footer/footer-main';
import MainPageContent from '@/components/page-content/main-page-content';
import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

interface IHomePageProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes | null;
}

const HomePage: FC<IHomePageProps> = ({catalog, contacts}) => {
//  console.log(window.innerWidth);
  return (
    <Page>
      <HeaderMain />
      <MainPageContent catalog={catalog}/>
      <FooterMain contacts={contacts}/>
    </Page>
  );
};

export default HomePage;
