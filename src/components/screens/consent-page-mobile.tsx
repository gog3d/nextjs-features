
import {FC} from 'react';
import PageMobile from '../page/page-mobile';

import HeaderCatalogItemMobile from '@/components/header/header-catalog-item-mobile';
//import PolicyPageContentMobile from '@/components/page-content/policy-page-content-mobile';
import ConsentPageContentMobile from '@/components/page-content/consent-page-content-mobile';
import FooterMainMobile from '@/components/footer/footer-main-mobile';

import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

interface IConsentPageProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes | null;
}

const ConsentPageMobile: FC<IConsentPageProps> = ({catalog, contacts}) => {
  return (
    <PageMobile>
      <HeaderCatalogItemMobile title={''} />
      <ConsentPageContentMobile contacts={contacts} />
      <FooterMainMobile contacts={contacts} />
    </PageMobile>
  );
};

export default ConsentPageMobile;
