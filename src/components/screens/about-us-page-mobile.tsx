import PageMobile from '@/components/page/page-mobile';
import PageContentWrapperAboutUsMobile from '@/components/page/page-content-wrapper-about-us-mobile';

import HeaderMainMobile from '@/components/header/header-main-mobile';
import FooterMainMobile from '@/components/footer/footer-main-mobile';
import ImageWrapperAboutUsMobile from '@/components/image/image-wrapper-about-us-mobile';


import Image from 'next/image';

//import MainPageContentMobile from '../page-content/main-page-content-mobile';
import AboutUsPageContentMobile from '../page-content/about-us-page-content-mobile';


const AboutUsPageMobile = () => {
  return (
    <PageMobile>
      <HeaderMainMobile />
      <PageContentWrapperAboutUsMobile>
        <AboutUsPageContentMobile />
      </PageContentWrapperAboutUsMobile>
      <ImageWrapperAboutUsMobile>
        <Image
          src={'/media/about-us-page-mobile-image.png'}
          alt='main-page-mobile-image'
          width='328'
          height='338'
        />
      </ImageWrapperAboutUsMobile>
      <FooterMainMobile />
    </PageMobile>
  );
};

export default AboutUsPageMobile;
