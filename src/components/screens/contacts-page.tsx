import {FC, ReactNode} from 'react';
import { useRouter } from 'next/router';

import PageMobile from '@/components/page/page-mobile';
import PageContentWrapperContactsMobile from '@/components/page/page-content-wrapper-contacts-mobile';

//import HeaderCatalogItemMobile from '@/components/header/header-catalog-item-mobile';
import HeaderMain from '@/components/header/header-main';
import ContactsMobile from '@/components/contacts/contacts-mobile';
import MapMobile from '@/components/map/map-mobile';


import ContainerPage from '@/components/container/container-page';


import { TContactsTypes } from '@/types/data-types';
import Error from '@/components/cups/error/error';

import { YMaps, Map } from 'react-yandex-maps';

interface IContactsTypesPageMobileProps {
  contacts: TContactsTypes | null;
};


const ContactsPage: FC<IContactsTypesPageMobileProps> = ({ contacts }) => {
//  console.log(contacts);
  const { asPath } = useRouter();
  return (
    <PageMobile>
      <ContainerPage>
      <HeaderMain />
      <PageContentWrapperContactsMobile>
        <ContactsMobile contacts={contacts} />
        <MapMobile points={['']}/>
      </PageContentWrapperContactsMobile>
      </ContainerPage>
    </PageMobile>
  );
};

export default ContactsPage;
