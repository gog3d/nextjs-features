import { FC, ReactNode } from 'react';
import styles from './page-content-wrapper-catalog-item-mobile.module.css';

interface IPageContentWrapperCatalogItemMobileProps {
  children: ReactNode;
}

const PageContentWrapperCatalogItemMobile: FC<IPageContentWrapperCatalogItemMobileProps> = ({children}) => {
  return (
    <div className={styles['page-content-wrapper']}>
      {children}
    </div>
  );
};

export default PageContentWrapperCatalogItemMobile;