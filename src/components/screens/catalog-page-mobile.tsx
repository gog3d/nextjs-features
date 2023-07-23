import PageMobile from '../page/page-mobile';
import HeaderMainMobile from '../header/header-main-mobile';
import FooterMainMobile from '../footer/footer-main-mobile';
import PageContentMobile from '../page-content/page-content-mobile';
import HorizontalScrolling from '../horizontal-scrolling/horizontal-scrolling';
import SrollingTextElips from '../icons/scrolling-text-elips';
//import MainPageContentMobile from '../main-page-content/main-page-content-mobile';

const CatalogPageMobile = () => {
  return (
    <PageMobile>
      <HeaderMainMobile />
        <PageContentMobile>
          <HorizontalScrolling>
            <span> Произведем в любом размере </span>
            <SrollingTextElips />
            <span> Дизайн нарисуем </span>
            <SrollingTextElips />
            <span> Макет разработаем </span>
            <SrollingTextElips />
            <span> Решение подберем </span>
            <SrollingTextElips />
            <span> Рекламу оформим </span>
            <SrollingTextElips />
            <span> Процессы подскажем </span>
            <SrollingTextElips />
            <span> Рецептуру придумаем </span>
          </HorizontalScrolling>
        </PageContentMobile>
      <FooterMainMobile />
    </PageMobile>
  );
};

export default CatalogPageMobile;
