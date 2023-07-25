//import Link from 'next/link';

import PageMobile from '../page/page-mobile';
import HeaderMainMobile from '../header/header-main-mobile';
import FooterMainMobile from '../footer/footer-main-mobile';
import PageContentCatalogMobile from '../page-content/page-content-catalog-mobile';
import HorizontalScrolling from '../horizontal-scrolling/horizontal-scrolling';

import CatalogCardsMobile from '../catalog-cards/catalog-cards-mobile';
import CatalogCardMobile from '../catalog-card/catalog-card-mobile';

import ButtonConnectMobile from '../button/button-connect-mobile';

import CatalogCupMobileIcon from '../icons/catalog-cup-mobile-icon';
import CatalogPaperPackagingMobileIcon from '../icons/catalog-paper-packaging-mobile-icon';
import CatalogLidsMobileIcon from '../icons/catalog-lids-mobile-icon';
import CatalogCartonPackagingMobileIcon from '../icons/catalog-carton-packaging-mobile-icon';
import CatalogPlasticBoxMobileIcon from '../icons/catalog-plastic-box-mobile-icon';
import CatalogUniformMobileIcon from '../icons/catalog-uniform-mobile-icon';
import CatalogMayonnaiseSauceMobileIcon from '../icons/catalog-mayonnaise-sauce-mobile-icon';
import CatalogSpaceDecorationMobileIcon from '../icons/catalog-space-decoration-mobile-icon';
import CatalogConsultingMobileIcon from '../icons/catalog-consulting-mobile-icon';
import CatalogDesignMobileIcon from '../icons/catalog-design-mobile-icon';

const scrollText = [
  'Произведем в любом размере', 'Дизайн нарисуем', 'Макет разработаем',
  'Решение подберем', 'Рекламу оформим', 'Процессы подскажем', 'Рецептуру придумаем'
];

const catalogItems = [
  {
    name: 'cups',
    text: 'Стаканы',
    link: '/cups-types',
    icon: <CatalogCupMobileIcon />,
  },
  {
    name: 'paper',
    text: 'Бумажная упаковка',
    link: '/paper-packaging',
    icon: <CatalogPaperPackagingMobileIcon />,
  },
  {
    name: 'lids',
    text: 'Крышки',
    link: '/lids',
    icon: <CatalogLidsMobileIcon />,
  },
  {
    name: 'carton',
    text: 'Картонная упаковка',
    link: '/carton-packaging',
    icon: <CatalogCartonPackagingMobileIcon />,
  },
  {
    name: 'plastic',
    text: 'Пластиковая упаковка',
    link: '/plastic-box',
    icon: <CatalogPlasticBoxMobileIcon />,
  },
  {
    name: 'unifom',
    text: 'Униформа',
    link: '/uniform',
    icon: <CatalogUniformMobileIcon />,
  },
  {
    name: 'mayonnaise',
    text: 'Майонезный соус',
    link: '/mayonnaise-sauce',
    icon: <CatalogMayonnaiseSauceMobileIcon />,
  },
  {
    name: 'space',
    text: 'Оформление пространства',
    link: '/space-decoration',
    icon: <CatalogSpaceDecorationMobileIcon />,
  },
  {
    name: 'consulting',
    text: 'Консалтинг',
    link: '/consulting',
    icon: <CatalogConsultingMobileIcon />,
  },
  {
    name: 'design',
    text: 'Дизайн',
    link: '/design',
    icon: <CatalogDesignMobileIcon />,
  }
];

const CatalogPageMobile = () => {

  return (
    <PageMobile>
      <HeaderMainMobile />
        <PageContentCatalogMobile>
          <HorizontalScrolling textArray={scrollText} />
          <CatalogCardsMobile>
          {
            catalogItems.map((item, index) => 
              <CatalogCardMobile text={item.text} link={item.link} name={item.name} key={index}>
                {item.icon}
              </CatalogCardMobile>
            )
          }
          </CatalogCardsMobile>
          <ButtonConnectMobile link={'/feedback'} text={'Связаться с нами'} />
        </PageContentCatalogMobile>
      <FooterMainMobile />
    </PageMobile>
  );
};

export default CatalogPageMobile;
