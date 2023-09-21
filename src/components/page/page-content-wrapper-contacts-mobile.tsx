import { FC, ReactNode } from 'react';
import styles from './page-content-wrapper-contacts-mobile.module.css';

interface IPageContentWrapperContactsMobileProps {
  children: ReactNode;
}

const PageContentWrapperContactsMobile: FC<IPageContentWrapperContactsMobileProps> = ({children}) => {
  return (
    <div className={styles['page-content-wrapper']}>
      {children}
    </div>
  );
};

export default PageContentWrapperContactsMobile;