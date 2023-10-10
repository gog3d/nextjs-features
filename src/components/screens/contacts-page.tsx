import {FC, ReactNode} from 'react';
import { useRouter } from 'next/router';

import Page from '@/components/page/page';


import PageContentWrapperContacts from '@/components/page/page-content-wrapper-contacts';

import HeaderMain from '@/components/header/header-main';
import FooterMain from '@/components/footer/footer-main';
import Contacts from '@/components/contacts/contacts';

//import MapMobile from '@/components/map/map-mobile';
import MapDesctop from '@/components/map/map-desctop';
import ContainerPage from '@/components/container/container-page';
import BreadCrumbsMobile from '@/components/bread-crumbs/bread-crumbs-mobile';

import { TContactsTypes } from '@/types/data-types';
import Error from '@/components/cups/error/error';

import { YMaps, Map } from 'react-yandex-maps';

interface IContactsTypesPageProps {
  contacts: TContactsTypes | null;
};


const ContactsPage: FC<IContactsTypesPageProps> = ({ contacts }) => {
  const { asPath } = useRouter();
  return (
    <Page>
      <HeaderMain />
      <ContainerPage>
        <PageContentWrapperContacts>
          <BreadCrumbsMobile routerPath={asPath}/>
          <Contacts contacts={contacts}>
            <MapDesctop points={['']}/>
          </Contacts>
        </PageContentWrapperContacts>
      </ContainerPage>
      <FooterMain contacts={contacts} />
    </Page>
  );
};

export default ContactsPage;
