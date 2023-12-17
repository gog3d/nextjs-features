import {FC} from 'react';
import PageMobile from '@/components/page/page-mobile';

import HeaderCatalogItemMobile from '@/components/header/header-catalog-item-mobile';
import PolicyPageContentMobile from '@/components/page-content/policy-page-content-mobile';
import FooterMainMobile from '@/components/footer/footer-main-mobile';

import { TDataTypes, TCatalogItemsTypes, TContactsTypes } from '@/types/data-types';

interface IPolicyPageProps {
  catalog: Array<TCatalogItemsTypes>;
  contacts: TContactsTypes | null;
}

const PolicyPageMobile: FC<IPolicyPageProps> = ({catalog, contacts}) => {
  return (
    <PageMobile>
      <HeaderCatalogItemMobile title={''}/>
      <PolicyPageContentMobile contacts={contacts}/>
      <FooterMainMobile contacts={contacts} />
    </PageMobile>
  );
};

export default PolicyPageMobile;
