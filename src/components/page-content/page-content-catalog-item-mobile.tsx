import { FC, ReactNode } from 'react';
import styles from './page-content-catalog-item-mobile.module.css';

interface IPageContentCatalogItemMobileProps {
  children: ReactNode;
}

const PageContentCatalogItemMobile: FC<IPageContentCatalogItemMobileProps> = ({children}) => {
  return (
    <main className={styles['page-content']}>
      {children}
    </main>
  );
};

export default PageContentCatalogItemMobile;