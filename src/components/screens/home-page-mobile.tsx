import PageMobile from '../page/page-mobile';
import HeaderMainMobile from '../header/header-main-mobile';
import FooterMainMobile from '../footer/footer-main-mobile';

import MainPageContentMobile from '../main-page-content/main-page-content-mobile';

const HomePageMobile = () => {
  return (
    <PageMobile>
      <HeaderMainMobile />
        <MainPageContentMobile />
      <FooterMainMobile />
    </PageMobile>
  );
};

export default HomePageMobile;
