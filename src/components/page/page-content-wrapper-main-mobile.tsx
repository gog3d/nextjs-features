import { FC, ReactNode } from 'react';
import styles from './page-content-wrapper-main-mobile.module.css';

interface IPageContentWrapperMainMobileProps {
  children: ReactNode;
}

const PageContentWrapperMainMobile: FC<IPageContentWrapperMainMobileProps> = ({children}) => {
  return (
    <div className={styles['page-content-wrapper']}>
      {children}
    </div>
  );
};

export default PageContentWrapperMainMobile;