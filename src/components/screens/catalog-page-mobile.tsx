//import Link from 'next/link';

import PageMobile from '../page/page-mobile';
import HeaderMainMobile from '../header/header-main-mobile';
import FooterMainMobile from '../footer/footer-main-mobile';
import PageContentMobile from '../page-content/page-content-mobile';
import HorizontalScrolling from '../horizontal-scrolling/horizontal-scrolling';
import SrollingTextElips from '../icons/scrolling-text-elips';

import CatalogCardsMobile from '../catalog-cards/catalog-cards-mobile';
import CatalogCardMobile from '../catalog-card/catalog-card-mobile';

import ButtonConnectMobile from '../button/button-connect-mobile';


import CatalogCupMobileIcon from '../icons/catalog-cup-mobile-icon';



const scrollText = [
  'Произведем в любом размере',
  'Дизайн нарисуем',
  'Макет разработаем',
  'Решение подберем',
  'Рекламу оформим',
  'Процессы подскажем',
  'Рецептуру придумаем'
];

const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const CatalogPageMobile = () => {

  return (
    <PageMobile>
      <HeaderMainMobile />
        <PageContentMobile>
          <HorizontalScrolling>
          {
            scrollText.map((text, index) => 
              <>
                <span key={index}>{text}</span><SrollingTextElips key={index}/>
              </>
            )
          }
          </HorizontalScrolling>
          <CatalogCardsMobile>
          {
            cards.map((card, index) => 
            <CatalogCardMobile text={'Стаканы'} link={'/cups-types'} key={index}>
              <CatalogCupMobileIcon />
            </CatalogCardMobile>
            )
          }
          </CatalogCardsMobile>
          <div style={{paddingBottom: '40px'}}>
            <ButtonConnectMobile link={'/feedback'} text={'Связаться с нами'} />
          </div>
        </PageContentMobile>
      <FooterMainMobile />
    </PageMobile>
  );
};

export default CatalogPageMobile;
