import PageMobile from '../page/page-mobile';
import HeaderMainMobile from '../header/header-main-mobile';
import FooterMainMobile from '../footer/footer-main-mobile';

import AboutUsPageContentMobile from '../page-content/about-us-page-content-mobile';

const AboutUsPageMobile = () => {
  return (
    <PageMobile>
      <HeaderMainMobile />
      <AboutUsPageContentMobile />
      <FooterMainMobile />
    </PageMobile>
  );
};

export default AboutUsPageMobile;
