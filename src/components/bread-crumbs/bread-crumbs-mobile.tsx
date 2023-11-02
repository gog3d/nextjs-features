import { FC, ReactNode } from 'react';
//import { v4 } from 'uuid';
import Link from 'next/link';
import styles from './bread-crumbs-mobile.module.css';

import RightChevronMobileIcon from '@/components/icons/right-chevron-mobile-icon';

interface IBreadCrumbsMobileProps {
  routerPath: string | undefined;
}

interface IPathsItem {
  title: string;
  link: string;
}

interface IPaths {
  '/': IPathsItem;
  'about-us': IPathsItem;
  'catalog': IPathsItem;
  'contacts': IPathsItem;
  'cups-types': IPathsItem;
  'policy': IPathsItem;

}


const paths: IPaths = {
  '/': {title: 'Главная', link: '/'},
  'about-us': {title: 'О нас', link: '/about-us'},
  'catalog': {title: 'Каталог', link: '/catalog'},
  'contacts': {title: 'Контакты', link: '/contacts'},
  'cups-types': {title: 'Стаканы', link: '/cups-types'},
  'policy': {title: 'Политика конфиденциальности', link: '/policy'},
//  'cups-types': {title: 'Стаканы', link: '/cups-types'},
};


const BreadCrumbsMobile: FC<IBreadCrumbsMobileProps> = ({routerPath}) => {

  const links = routerPath?.split('/');
  if (links) links[0] = '/';

//  console.log(v4());

  const currentPath = links?.pop();

  return (
    <div className={styles['bread-crumbs']}>
      <div className={styles['bread-crumbs-wrapper']} >
        {
          links?.map((item, index) =>
            <div className={styles['link-wrapper']} key={index}>
              <Link href={paths[item as keyof IPaths]['link' as keyof IPathsItem]}>
                <div>
                  {paths[item as keyof IPaths]['title' as keyof IPathsItem]}
                </div>
              </Link>
              <RightChevronMobileIcon />
            </div>
          )
        }
        <div className={styles['bread-crumbs_current']}>
          {paths[currentPath as keyof IPaths]['title' as keyof IPathsItem]}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbsMobile;
