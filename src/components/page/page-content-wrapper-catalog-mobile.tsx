import { FC, ReactNode } from 'react';
import styles from './page-content-wrapper-catalog-mobile.module.css';

interface IPageContentWrapperCatalogMobileProps {
  children: ReactNode;
}

const PageContentWrapperCatalogMobile: FC<IPageContentWrapperCatalogMobileProps> = ({children}) => {
  return (
    <div className={styles['page-content-wrapper']}>
      {children}
    </div>
  );
};

export default PageContentWrapperCatalogMobile;