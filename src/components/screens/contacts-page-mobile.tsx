import {FC, ReactNode} from 'react';
import PageMobile from '@/components/page/page-mobile';
import PageContentWrapperContactsMobile from '@/components/page/page-content-wrapper-contacts-mobile';

import HeaderCatalogItemMobile from '@/components/header/header-catalog-item-mobile';
import ContactsMobile from '@/components/contacts/contacts-mobile';
import MapMobile from '@/components/map/map-mobile';

import { useRouter } from 'next/router';

import { TContactsTypes } from '@/types/data-types';
import Error from '@/components/cups/error/error';

import { YMaps, Map } from 'react-yandex-maps';

interface IContactsTypesPageMobileProps {
  contacts: TContactsTypes | null;
};


const ContactsPageMobile: FC<IContactsTypesPageMobileProps> = ({ contacts }) => {
//  console.log(contacts);
  const { asPath } = useRouter();
  return (
    <PageMobile>
      <HeaderCatalogItemMobile title={'Контакты'}/>
      <PageContentWrapperContactsMobile>
        <ContactsMobile contacts={contacts} />
        <MapMobile points={['']}/>
      </PageContentWrapperContactsMobile>
    </PageMobile>
  );
};

export default ContactsPageMobile;
