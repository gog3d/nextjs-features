import { FC, ReactNode } from 'react';
import styles from './page-content-wrapper-catalog.module.css';

interface IPageContentWrapperCatalogProps {
  children: ReactNode;
}

const PageContentWrapperCatalog: FC<IPageContentWrapperCatalogProps> = ({children}) => {
  return (
    <div className={styles['page-content-wrapper']}>
      {children}
    </div>
  );
};

export default PageContentWrapperCatalog;
