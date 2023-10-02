import { FC } from 'react';

//import PageMobile from '@/components/page/page-mobile';
import Page from '@/components/page/page';

//import PageContentWrapperMainMobile from '@/components/page/page-content-wrapper-main-mobile';
//import ContainerPage from '@/components/container/container-page';

//import HeaderMainMobile from '@/components/header/header-main-mobile';
import HeaderMain from '@/components/header/header-main';

//import FooterMainMobile from '@/components/footer/footer-main-mobile';
import FooterMain from '@/components/footer/footer-main';

//import ImageWrapperMainMobile from '@/components/image/image-wrapper-main-mobile';

//import Image from 'next/image';

//import MainPageContentMobile from '../page-content/main-page-content-mobile';
import MainPageContent from '../page-content/main-page-content';

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
      <MainPageContent />
      <FooterMain contacts={contacts}/>
    </Page>
  );
};

export default HomePage;

/*
      <HeaderMainMobile />
      <PageContentWrapperMainMobile>
        <MainPageContentMobile />
      </PageContentWrapperMainMobile>
      <ImageWrapperMainMobile>
        <Image
          src={'/media/main-page-mobile-image.png'}
          alt='main-page-mobile-image'
          width='328'
          height='338'
        />
      </ImageWrapperMainMobile>
      <FooterMainMobile contacts={contacts}/>
      <div style={{border: '1px blue solid', 
        maxWidth: '1172px', 
        width: '100%', 
        margin: '0 auto',
        padding: '0px 8px',
        minHeight: '500px'
        }}>
        <PageContentWrapperMain>
          <MainPageContentMobile />
        </PageContentWrapperMain>
      </div>

*/

