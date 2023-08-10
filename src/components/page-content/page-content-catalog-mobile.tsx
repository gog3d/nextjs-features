import { FC, ReactNode } from 'react';
import styles from './page-content-catalog-mobile.module.css';

interface IPageContentCatalogMobileProps {
  children: ReactNode;
}

const PageContentCatalogMobile: FC<IPageContentCatalogMobileProps> = ({children}) => {
  return (
    <main className={styles['page-content']}>
      {children}
    </main>
  );
};

export default PageContentCatalogMobile;