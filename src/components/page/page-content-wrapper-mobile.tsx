import { FC, ReactNode } from 'react';
import styles from './page-content-wrapper-mobile.module.css';

interface IPageContentWrapperMobileProps {
  children: ReactNode;
}

const PageContentWrapperMobile: FC<IPageContentWrapperMobileProps> = ({children}) => {
  return (
    <div className={styles['page-content-wrapper']}>
      {children}
    </div>
  );
};

export default PageContentWrapperMobile;